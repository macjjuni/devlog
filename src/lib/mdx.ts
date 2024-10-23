import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypePrism from "rehype-prism-plus";
import remarkToc from "remark-toc";
import rehypeCodeTitles from "rehype-code-titles";

export function mdxSerializer(source: string) {
  return serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkToc, remarkGfm],
      rehypePlugins: [rehypeHighlight, rehypePrism, rehypeCodeTitles],
      format: "mdx",
    },
  });
}
