import {
  getAllPosts,
  getAllPostMetas,
  getPostBySlug,
  getPostsByCategory,
  getAllCategories,
  searchPosts,
  getBlogInfo,
  toPostMeta,
} from "@/lib/markdown";
import type { PostMeta, Post, BlogInfo } from "@/@types/post";

export async function getPostList(): Promise<{ info: BlogInfo; pages: PostMeta[]; error: boolean }> {
  try {
    const info = getBlogInfo();
    const pages = getAllPostMetas();
    return { info, pages, error: false };
  } catch (e) {
    console.error(e);
    return {
      info: { title: "Not Found", description: "Not Found", categories: [] },
      pages: [],
      error: true,
    };
  }
}

export async function getPostDetail(slug: string): Promise<{
  post: Post | null;
  error: boolean;
}> {
  try {
    const post = getPostBySlug(slug);
    if (!post) {
      return { post: null, error: true };
    }
    return { post, error: false };
  } catch (e) {
    console.error(e);
    return { post: null, error: true };
  }
}

export async function getCategoryPostList(categoryName: string): Promise<{
  info: BlogInfo | null;
  pages: PostMeta[];
  error: boolean;
}> {
  try {
    const categories = getAllCategories();
    if (!categories.includes(categoryName)) {
      return { info: null, pages: [], error: true };
    }

    const info = getBlogInfo();
    const posts = getPostsByCategory(categoryName);
    const pages = posts.map(toPostMeta);

    return { info, pages, error: false };
  } catch (e) {
    console.error(e);
    return { info: null, pages: [], error: true };
  }
}

export async function getSearchResults(keyword: string): Promise<{
  info: BlogInfo | null;
  searchPages: PostMeta[];
  error: boolean;
}> {
  try {
    const info = getBlogInfo();
    const results = searchPosts(keyword);
    const searchPages = results.map(toPostMeta);
    return { searchPages, info, error: false };
  } catch (e) {
    console.error(e);
    return { searchPages: [], info: null, error: true };
  }
}
