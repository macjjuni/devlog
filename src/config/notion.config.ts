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
    SITE_IMAGE: "/api/notion/getSiteImage", // 노션 DB 설명란에 작성된 링크 주소를 가져옴
    POST_PATH: "blog", // 블로그 페이지로 사용할 경로
    CATEGORY_PATH: "category", // 블로그에 카테고리 페이지로 사용할 경로('./src/pages' 폴더에 동일한 이름에 디렉토리와 링크될 파일 만들어 줘야 함)
  },
  // 포스팅 관련 설정
  post: {
    RECENT_DAY: 3, // 최근 포스팅 날짜 기한
    POSTS_PER_PAGE: 8, // 한 페이지에 보여지는 글수
    PAGINATION_RANGE: 5, // 페이지네이션 표시 수
    DEFAULT_THUMB: "/images/default_thumb.webp",
    DEFAULT_ALT: "kkussaeng",
  },
  categoryColor: [
    { key: "dev", color: "#9a57ff" },
    { key: "bitcoin", color: "#f7931a" },
    { key: "javascript", color: "#FFCA28" },
    { key: "typescript", color: "#3178c6" },
    { key: "react", color: "#61dafb" },
    { key: "vue", color: "#42b983" },
    { key: "cs", color: "#cf4040" },
    { key: "git", color: "#EE513B" },
    { key: "일상", color: "#26b7f0" },
    { key: "default", color: "#3e3e3e" },
  ],
};

export default config;
