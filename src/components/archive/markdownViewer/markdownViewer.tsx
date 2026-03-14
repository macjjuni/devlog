import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import type { Post } from "@/@types/post";
import PostHeader from "./postHeader";
import { toPostMeta } from "@/lib/markdown";

interface MarkdownViewerProps {
  post: Post;
}

async function renderMarkdown(content: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypePrettyCode, { theme: "github-dark", keepBackground: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  return String(result);
}

export default async function MarkdownViewer({ post }: MarkdownViewerProps) {
  const meta = toPostMeta(post);
  const html = await renderMarkdown(post.content);

  return (
    <article className="mx-auto w-full max-w-[860px] px-4">
      <PostHeader meta={meta} />
      <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
