# CLAUDE.md

## Language

- Always respond in **Korean** (comments, commit messages, PR descriptions, answers).
- Write this file in English for token efficiency.

## Project Overview

Next.js 16 personal blog using Markdown files as CMS. Posts live in `content/posts/*.md` with YAML frontmatter. Rendered via `unified` + `remark/rehype` pipeline with `rehype-pretty-code` (shiki) for syntax highlighting.

## Commands

```bash
pnpm dev          # Dev server (Turbopack)
pnpm build        # Production build
pnpm start        # Start production
pnpm lint         # Lint
```

## Environment Variables

```bash
NEXT_PUBLIC_TITLE=
NEXT_PUBLIC_DESCRIPTION=
NEXT_PUBLIC_DOMAIN=
NEXT_PUBLIC_LOGO=
NEXT_PUBLIC_GA_ID=         # Google Analytics (optional)
NEXT_PUBLIC_GITHUB_REPO=   # Giscus comment repo
```

## Architecture

### Content Layer (Markdown)

- Posts: `content/posts/*.md` — slug derived from filename
- Config: `src/config/blog.config.ts` — POSTS_PER_PAGE, RECENT_DAY, etc.
- Core lib: `src/lib/markdown.ts` — `getAllPosts()`, `getPostBySlug()`, `getPostsByCategory()`, `searchPosts()`, `getBlogInfo()`
- API layer: `src/api/posts/index.ts` — `getPostList()`, `getPostDetail()`, `getCategoryPostList()`, `getSearchResults()`
- All functions use React `cache()` for request deduplication

### Frontmatter Schema

```yaml
---
title: "Post Title"
date: "2024-01-15"
category: "JavaScript"
tags: ["React", "Next.js"]
cover: "/images/posts/cover.jpg"  # optional
description: "SEO description"
---
```

### Types

- `src/@types/post.d.ts` — `PostMeta`, `Post` (extends PostMeta + content), `BlogInfo`

### Directory Structure

```
content/posts/         # Markdown blog posts
public/images/posts/   # Post images
src/
├── api/posts/         # Data layer (markdown-based)
├── app/               # Next.js App Router
│   ├── archive/       # Blog pages
│   │   ├── [slug]/    # Post detail (ISR 60s)
│   │   ├── category/[slug]/  # Category filter
│   │   └── search/    # Search results
├── components/
│   ├── archive/       # ArchiveList, ArchiveTitle, MarkdownViewer, Pagination, Comment
│   ├── sidebar/       # Profile, Search
│   └── common/        # Navigation
├── config/            # blog.config.ts, meta.ts
├── hook/              # usePageSize, useCategoryName, useSearchText
├── layout/            # Header, Footer, Main, ArchiveContent, ArchiveSidebar
├── lib/               # markdown.ts, date.ts, request.ts
├── store/             # Zustand (isHeaderMini)
├── route/             # Route definitions
├── style/             # globals.css, markdown.css
└── utils/             # string.ts, system.ts
```

### Routing

| Route | Description | Revalidation |
|-------|-------------|--------------|
| `/` | Home/About page | Static |
| `/archive` | Post list (paginated) | 600s |
| `/archive/[slug]` | Post detail | 60s |
| `/archive/category/[slug]` | Category filter | 600s |
| `/archive/search?q=...` | Search results | 600s |

All archive pages are pre-generated at build via `generateStaticParams()`.

### Markdown Rendering

- `MarkdownViewer` (`src/components/archive/markdownViewer/`) — async Server Component
- Pipeline: `unified` → `remark-parse` → `remark-gfm` → `remark-rehype` → `rehype-slug` → `rehype-pretty-code` → `rehype-stringify`
- Output: HTML string rendered via `dangerouslySetInnerHTML`
- Styles: `src/style/markdown.css` (`.markdown-body` class)

### State Management (Zustand)

- Store: `src/store/store.ts`, persisted to localStorage (`"kku-storage"`)
- `isHeaderMini` — header scroll state

### Component Patterns

- Server Components by default; use `"use client"` only for interactions/hooks/state
- `ArchiveList` shows "NEW" badge for posts within `RECENT_DAY` days
- `PostHeader` renders title, date, category, tags, cover image

### Custom Hooks

- `usePageSize("page")` — extract `?page=` from URL
- `useCategoryName()` — extract category from pathname
- `useSearchText()` — extract `?q=` from search params

### External Integrations

- **Giscus** — GitHub-backed comments (`mapping: "pathname"`)
- **Google Analytics** — via `@next/third-parties` with Partytown

### Image Handling

- Post covers: `/public/images/posts/`
- Inline images: `/public/images/posts/{slug}/`
- Site OG image: `/public/images/site-og.webp` (static)
- Allowed remote: `pbs.twimg.com`, `avatars.githubusercontent.com`

## Key Packages

- `kku-ui` — custom component library (external)
- `kku-util` — custom utilities (external)
