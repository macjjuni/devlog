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
    Checkbox: '프로젝트',
  },
  blog: {
    siteURL: process.env.SITE_URL || 'http://kku.dev', // 도메인
    defaultThumb: '/images/default.webp',
    postPath: 'blog', // 웹사이트에서 블로그 포스팅이 보여질 path
    catPath: 'category', // pages 폴더에 동일하게 디렉토리와 링크될 파일 만들어 줘야 함.
  },
  // 포스팅 관련 설정
  post: {
    RECENT_DAY: 3, // 최근 포스팅 날짜 기한
    POSTS_PER_PAGE: 8, // 한 페이지에 보여지는 글수
    PAGINATION_RANGE: 5, // 페이지네이션 표시 수
    DEFAULT_THUMB_URL: '/images/banner-cover.webp', // 아직 미사용(개발 예정...)
  },
}

export default config
