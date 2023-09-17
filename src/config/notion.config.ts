const config = {
  // 노션 인증 정보
  token: {
    activeUser: process.env.NOTION_USER,
    auth: process.env.NOTION_TOKEN,
    authToken: process.env.NOTION_TOKEN_V2,
  },
  // DB 속성 테이블
  propertyTable: {
    Date: '작성일',
    Published: '상태',
    Tags: '태그',
    Category: '카테고리',
  },
  blog: {
    siteURL: process.env.SITE_URL || 'http://kku.dev',
    defaultThumb: '/image/post-cover.webp',
    postPath: 'blog',
    catPath: 'category',
  },
  // 페이지별 검색 개수
  post: {
    POSTS_PER_PAGE: 10,
    PAGINATION_RANGE: 5,
    DEFAULT_THUMB_URL: '/images/banner-cover.webp',
  },
}

export default config
