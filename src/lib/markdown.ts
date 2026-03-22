import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";
import type { Post, PostMeta, BlogInfo } from "@/@types/post";
import blogConfig from "@/config/blog.config";

const postsDirectory = path.join(process.cwd(), blogConfig.post.CONTENT_DIR);

function getPostFiles(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));
}

function parsePost(fileName: string): Post {
  const slug = fileName.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "",
    date: data.date || "",
    category: data.category || "",
    tags: data.tags || [],
    cover: data.cover || "",
    description: data.description || "",
    content,
  };
}

// 전체 글 목록 (날짜순 정렬)
export const getAllPosts = cache((): Post[] => {
  const files = getPostFiles();
  const posts = files.map(parsePost);
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
});

// 개별 글 조회
export const getPostBySlug = cache((slug: string): Post | undefined => {
  const fileName = `${slug}.md`;
  const filePath = path.join(postsDirectory, fileName);
  if (!fs.existsSync(filePath)) return undefined;
  return parsePost(fileName);
});

// 카테고리별 필터
export const getPostsByCategory = cache((category: string): Post[] => {
  return getAllPosts().filter((post) => post.category === category);
});

// 전체 카테고리 목록
export const getAllCategories = cache((): string[] => {
  const posts = getAllPosts();
  const categories = new Set(posts.map((post) => post.category).filter(Boolean));
  return Array.from(categories).sort();
});

// 제목 + 본문 검색
export const searchPosts = cache((query: string): Post[] => {
  const lowerQuery = query.toLowerCase();
  return getAllPosts().filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.content.toLowerCase().includes(lowerQuery) ||
      post.description.toLowerCase().includes(lowerQuery)
  );
});

// 블로그 정보
export const getBlogInfo = cache((): BlogInfo => {
  return {
    title: process.env.NEXT_PUBLIC_TITLE || "",
    description: process.env.NEXT_PUBLIC_DESCRIPTION || "",
    categories: getAllCategories(),
  };
});

// Post -> PostMeta 변환 (content 제외)
export function toPostMeta(post: Post): PostMeta {
  const { content, ...meta } = post;
  return meta;
}

// 전체 글 메타 목록
export const getAllPostMetas = cache((): PostMeta[] => {
  return getAllPosts().map(toPostMeta);
});
