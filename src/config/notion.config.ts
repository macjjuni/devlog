// 노션 인증 정보
export const token = {
  activeUser: process.env.NOTION_USER,
  auth: process.env.NOTION_TOKEN,
  authToken: process.env.NOTION_TOKEN_V2,
};

const config = {
  // DB 속성 테이블
  propertyTable: {
    Date: "작성일",
    Published: "상태",
    Tags: "태그",
    Category: "카테고리",
    Checkbox: "프로젝트",
  },
  blog: {
    SITE_URL: process.env.SITE_URL || "http://kku.dev", // 도메인
    SITE_IMAGE: "/api/notion/siteImage", // 노션 DB 설명란에 작성된 링크 주소를 가져옴
  },
  profile: {
    NICK_NAME: "꾸생",
    INTRO: "Stay humble and stack sats.",
    PROFILE_IMAGE: "/assets/image/profile.webp",
  },
  // 포스팅 관련 설정
  archive: {
    RECENT_DAY: 3, // 최근 포스팅 날짜 기한
    POSTS_PER_PAGE: 10, // 한 페이지에 보여지는 글수
    PAGINATION_RANGE: 5, // 페이지네이션 표시 수
    DEFAULT_THUMB: "/images/default_thumb.webp",
    DEFAULT_ALT: "kkusaeng",
  },
};

export default config;
