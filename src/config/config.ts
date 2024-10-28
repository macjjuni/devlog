const config = {
  blog: {
    SITE_URL: process.env.SITE_URL || "https://kku.dev", // 도메인
    SITE_IMAGE: "/assets/image/profile.webp",
  },
  profile: {
    NICK_NAME: "꾸생",
    INTRO: "Stay humble and stack sats.",
    PROFILE_IMAGE: "/assets/image/profile.webp",
  },
  archive: {
    RECENT_DAY: 5, // 최근 포스팅 날짜 기한
    POSTS_PER_PAGE: 10, // 한 페이지에 보여지는 글수
    PAGINATION_RANGE: 5, // 페이지네이션 표시 수
  },
  category: {
    allText: "all",
  }
};

export default config;
