// import type { ColorTypes } from "@/@types/theme";
// type ExcludeNullThemeTypes = Exclude<ColorTypes, null>;

export const commentElementId = "utterances-kku";
const repoUrl = process.env.NEXT_PUBLIC_GITHUB_REPO || null;

// utterances 스크립트 삽입
export const appendUtter = (dom: HTMLElement) => {
  if (!repoUrl) {
    throw Error("Not Found Github repo url");
  }

  const scriptEl = document.createElement("script");
  scriptEl.setAttribute("src", "https://utteranc.es/client.js");
  scriptEl.setAttribute("async", "true");
  scriptEl.setAttribute("crossOrigin", "anonymous");
  scriptEl.setAttribute("repo", repoUrl);
  scriptEl.setAttribute("issue-term", "url");
  scriptEl.setAttribute("theme", "github-dark");
  scriptEl.setAttribute("label", "💬 Discussion");
  dom.prepend(scriptEl);
};
