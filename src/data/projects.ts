export interface Project {
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  tags?: string[];
}

const projects: Project[] = [
  {
    title: "kku-ui",
    description: "React 기반 커스텀 UI 컴포넌트 라이브러리",
    thumbnail: "/images/projects/kku-ui.webp",
    url: "https://github.com/macjjuni/kku-ui",
    tags: ["React", "TypeScript", "Storybook"],
  },
  {
    title: "kku-util",
    description: "프론트엔드 유틸리티 함수 모음",
    thumbnail: "/images/projects/kku-util.webp",
    url: "https://github.com/macjjuni/kku-util",
    tags: ["TypeScript", "Utility"],
  },
  {
    title: "devlog",
    description: "Next.js 기반 개인 기술 블로그",
    thumbnail: "/images/projects/devlog.webp",
    url: "https://github.com/macjjuni/devlog",
    tags: ["Next.js", "Markdown", "Tailwind"],
  },
];

export default projects;
