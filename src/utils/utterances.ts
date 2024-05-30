// import type { ColorTypes } from "@/@types/theme";
// type ExcludeNullThemeTypes = Exclude<ColorTypes, null>;

export const commentElemetId = "comment";
const repoUrl = process.env.NEXT_PUBLIC_GITHUB_REPO || "";

// utterances 스크립트 삽입
export const appendUtter = (dom: HTMLElement) => {
  if (repoUrl === "") throw Error("Not Found Github repo url");
  const scriptEl = document.createElement("script");
  scriptEl.src = "https://utteranc.es/client.js";
  scriptEl.async = true;
  scriptEl.crossOrigin = "anonymous";
  scriptEl.setAttribute("repo", repoUrl);
  scriptEl.setAttribute("issue-term", "url");
  scriptEl.setAttribute("theme", "github-dark");
  scriptEl.setAttribute("label", "💬 Discussion");
  dom.prepend(scriptEl);
};

// utterances 삽입 유무
export const isContainUtter = (parentDom: HTMLElement) => {
  let isContain = false;
  for (let i = 0; i < parentDom.children.length; i += 1) {
    isContain = parentDom.children[i].classList.contains("utterances");
  }
  return isContain;
};

// 테마 변경
// export const toggleTheme = (theme: ExcludeNullThemeTypes) => {
//   const iframe = document.querySelector<HTMLIFrameElement>(".utterances-frame");
//   if (!iframe) return;
//   iframe.contentWindow?.postMessage({ type: "set-theme", theme: `github-${theme}` }, "https://utteranc.es");
// };

// 스크롤 이동
// export const scrollComment = (e: React.MouseEvent) => {
//   e.preventDefault();
//   const docHeight = document.body.scrollHeight;
//   onScroll(docHeight);
// };
