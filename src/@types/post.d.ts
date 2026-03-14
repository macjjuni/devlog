// 블로그 글 메타데이터
export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  cover: string;
  description: string;
}

// 블로그 글 (메타 + 본문)
export interface Post extends PostMeta {
  content: string;
}

// 블로그 정보 (사이드바용)
export interface BlogInfo {
  title: string;
  description: string;
  categories: string[];
}
