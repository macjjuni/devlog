# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15-based personal blog that uses Notion as a headless CMS. Content is fetched from a Notion database and rendered using `react-notion-x`. The project uses Korean property names in the Notion database with a bilingual codebase.

## Development Commands

```bash
# Development (uses Turbopack)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint
pnpm lint
```

## Environment Variables

Required `.env.local` configuration:

```bash
# Notion API (required for CMS functionality)
NOTION_TOKEN=           # Official Notion API key
NOTION_TOKEN_V2=        # Unofficial Notion API token (for rich content)
NOTION_USER=            # Notion user ID (for unofficial API)
NOTION_BLOG_DATABASE_ID= # The database ID containing blog posts

# Public metadata
NEXT_PUBLIC_TITLE=
NEXT_PUBLIC_DESCRIPTION=
NEXT_PUBLIC_DOMAIN=
NEXT_PUBLIC_LOGO=
NEXT_PUBLIC_GA_ID=      # Google Analytics ID (optional)
```

See `.env.template` for full reference.

## Architecture Overview

### Notion Integration (Dual-Client Pattern)

This codebase uses **two different Notion clients** for different purposes:

1. **Official Client** (`@notionhq/client`) - `/src/lib/noiton.ts`
   - Database queries and filtering
   - Structured data extraction
   - Used by: archive list, search, category filtering

2. **Unofficial Client** (`notion-client`) - `/src/lib/noiton.ts`
   - Rich content rendering via `recordMap`
   - Used by: detail pages for full Notion content display

### Notion Database Schema

The Notion database uses Korean property names with this mapping in `src/config/notion.config.ts`:

```typescript
{
  Date: "작성일",      // Published date
  Published: "상태",   // Status ("공개" = published)
  Tags: "태그",        // Tags
  Category: "카테고리", // Category
  Checkbox: "프로젝트"  // Project filter (false = show in blog)
}
```

**Only pages where `상태 = "공개"` AND `프로젝트 = false` are displayed on the blog.**

### Key Functions in `/src/lib/noiton.ts`

- `getNotionInfo()` - Fetch database metadata
- `getPages()` - Get all published blog posts with filtering
- `getDetailPage(id)` - Fetch single post's `recordMap` for rendering
- `getSelectPage(searchText)` - Full-text search across pages
- `getParsePages()` - Transform raw Notion responses to app types
- `generateCoverUrl()` - Extract and format page cover images
- `getHeadDescription()` - Extract first 100 characters as excerpt

### Directory Structure

```
src/
├── api/             # API integration (Notion, Bitcoin market data)
├── app/             # Next.js App Router pages
│   ├── archive/     # Blog list and detail pages
│   │   ├── [id]/          # Individual post (dynamic route)
│   │   ├── category/[slug]/ # Category-filtered posts
│   │   └── search/        # Search results
│   └── api/         # Server-side API routes
├── components/      # React components organized by feature
│   ├── archive/     # Blog-related components (list, viewer, comments)
│   ├── sidebar/     # Sidebar widgets (search, category, Bitcoin chart)
│   └── common/      # Shared UI components
├── config/          # Configuration (Notion schema, metadata, social links)
├── hook/            # Custom React hooks (URL params, responsive design)
├── layout/          # Layout components (header, footer, main)
├── lib/             # Core utilities (Notion client, HTTP, date)
├── store/           # Zustand state management
└── route/           # Route definitions and URL generators
```

### Routing Patterns

- `/` - About/home page
- `/archive` - Blog list (paginated)
- `/archive/[id]` - Individual blog post (uses ISR with 60s revalidation)
- `/archive/category/[slug]` - Category-filtered posts
- `/archive/search?q=...` - Search results

**Static Generation:** All archive pages are pre-generated at build time using `generateStaticParams()` from the Notion database.

**ISR Timings:**
- Archive list: 600 seconds (10 minutes)
- Archive detail: 60 seconds (1 minute)
- Site image: 10800 seconds (3 hours)

### State Management (Zustand)

Global state in `/src/store/store.ts` with LocalStorage persistence (key: `"kku-storage"`):

- `isHeaderMini` - Header scroll state
- `btcChart` - Bitcoin price chart data (cached by timeframe: 1, 7, 30, 365 days)
- `realTimeMarketPriceUSD` - Current BTC price
- `searchHistory` - Search history with deduplication

### Component Patterns

**Server Components by Default:**
- All pages and data-fetching components are server components
- Mark components with `"use client"` only when needed (interactions, hooks, state)

**NotionViewer Component** (`/src/components/archive/notionViewer/`):
- Renders Notion content using `react-notion-x`
- Dynamically injects TOC links (댓글, 글 목록)
- Custom components for Code, Collection, Equation, nextImage, nextLink

**ArchiveList Component** (`/src/components/archive/archiveList/`):
- Shows "new" badge for posts published within 7 days
- Handles pagination slicing with `useMemo`

### Custom Hooks

- `usePageSize()` - Extract `?page=` from URL
- `useCategoryName()` - Extract category slug from URL path
- `useSearchText()` - Extract `?q=` search query from URL
- `useMediaScreen()` - Responsive breakpoint detection
- `useOutsideClick()` - Click-outside handler for modals

### SEO & Metadata

Each page implements `generateMetadata()` for:
- Dynamic titles and descriptions
- OpenGraph and Twitter card images
- Automatic fallback to Notion page cover images

### External Integrations

- **Giscus** - GitHub-backed comment system (in `ArchiveComment`)
- **Spline** - 3D background animation on About page
- **Chart.js** - Bitcoin price chart in sidebar
- **Google Analytics** - Via `@next/third-parties` with Partytown

## Important Architectural Notes

1. **Search Implementation:**
   - Search uses Notion's unofficial API to query page content
   - Search history is deduplicated (keeps most recent occurrence)
   - URL and Zustand state stay synchronized via custom hooks

2. **Category Filtering:**
   - Categories are extracted from Notion database Select property
   - Sidebar uses horizontal scroll with arrow navigation
   - Category pages are server-rendered with ISR

3. **Image Handling:**
   - Notion images allowed via `next.config.mjs` remote patterns
   - Page cover images auto-extracted for SEO metadata
   - GitHub/Twitter avatars allowed for social icons

4. **Korean Content:**
   - Notion property names are in Korean
   - Code comments and UI strings may mix Korean/English
   - Maintain consistency with existing patterns when adding features

5. **Custom Packages:**
   - `kku-ui` - Custom component library (external dependency)
   - `kku-util` - Custom utilities (external dependency)
   - These are maintained separately and imported as packages
