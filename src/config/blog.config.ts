const blogConfig = {
  blog: {
    SITE_URL: process.env.SITE_URL || "http://kku.dev",
    SITE_IMAGE: "/images/site-og.webp",
  },
  post: {
    RECENT_DAY: 3,
    POSTS_PER_PAGE: 10,
    PAGINATION_RANGE: 5,
    DEFAULT_THUMB: "/images/default_thumb.webp",
    DEFAULT_ALT: "kkusaeng",
    CONTENT_DIR: "content/posts",
  },
};

export default blogConfig;
