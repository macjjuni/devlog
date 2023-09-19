// 노션 인증 정보
export const token = {
  activeUser: process.env.NOTION_USER,
  auth: process.env.NOTION_TOKEN,
  authToken: process.env.NOTION_TOKEN_V2,
}

const config = {
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
    catPath: 'category', // pages 폴더에 동일하게 디렉토리와 링크될 파일 만들어 줘야 함.
  },
  // 페이지별 검색 개수
  post: {
    RECENT_DAY: 3,
    POSTS_PER_PAGE: 10,
    PAGINATION_RANGE: 5,
    DEFAULT_THUMB_URL: '/images/banner-cover.webp',
  },
}

export default config
