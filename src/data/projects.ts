export interface Project {
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  tags?: string[];
}

const projects: Project[] = [
  {
    title: "알고사주(AlgoSaju)",
    description: "알고리즘과 동서양 점성술의 만남. AI가 분석해주는 운세 설명 서비스",
    thumbnail: "https://www.algosaju.app/opengraph-image.png?opengraph-image.3e900665.png",
    url: "https://www.algosaju.app",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Gemini"],
  },
  {
    title: "Only ₿itcoin",
    description: "비트코인의 실시간 데이터 시각화와 기술적 지표를 제공하는 대시보드 프로젝트입니다.",
    thumbnail: "https://www.only-btc.app/app/og-image.webp",
    url: "https://www.only-btc.app",
    tags: ["PWA", "Next.js", "React", "TypeScript", "Tailwind CSS", "kku-ui"],
  },
  {
    title: "EZ Paint",
    description: "휘뚜루마뚜루 사용하는 웹 그림판",
    thumbnail: "https://ez-paint.web.app/favicon/apple-touch-icon.png",
    url: "https://ez-paint.web.app",
    tags: ["React", "kku-ui", "firebase"],
  },
  {
    title: "macjjuni.log",
    description: "Next.js 기반 개인 블로그",
    thumbnail: "/images/projects/devlog.webp",
    url: "https://macjjuni.me",
    tags: ["Next.js", "Markdown", "Tailwind", "kku-ui"],
  },
  {
    title: "kku-ui",
    description: "Radix UI 기반 커스텀 컴포넌트 라이브러리",
    thumbnail: "/images/projects/kku-ui.webp",
    url: "https://github.com/macjjuni/kku-ui",
    tags: ["React", "TypeScript", "Vitest", "Storybook"],
  },
];

export default projects;
