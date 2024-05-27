import { memo } from "react";
import { KIcon } from "kku-ui";

const iconSize = 24;

function ArchiveTitleIcon({ title }: { title: string }) {
  const smallLetterTitle = title.toLowerCase();

  if (smallLetterTitle === "all") {
    return <KIcon icon={"book"} className={"archive__title__icon"} size={iconSize} />;
  }
  if (smallLetterTitle === "dev") {
    return <KIcon icon={"dev"} className={"archive__title__icon"} size={iconSize} color={"#31363F"} />;
  }
  if (smallLetterTitle === "javascript") {
    return <KIcon icon={"javascript"} className={"archive__title__icon"} size={iconSize} />;
  }
  if (smallLetterTitle === "typescript") {
    return <KIcon icon={"typescript"} className={"archive__title__icon"} size={iconSize} />;
  }
  if (smallLetterTitle === "react") {
    return <KIcon icon={"react"} className={"archive__title__icon"} size={iconSize} />;
  }
  if (smallLetterTitle === "vue") {
    return <KIcon icon={"vue"} className={"archive__title__icon"} size={iconSize} />;
  }
  if (smallLetterTitle === "daily") {
    return <KIcon icon={"page"} className={"archive__title__icon"} size={iconSize} />;
  }
  if (smallLetterTitle === "bitcoin") {
    return <KIcon icon={"bitcoin"} className={"archive__title__icon"} size={iconSize} />;
  }
  if (smallLetterTitle === "algorithm") {
    return <KIcon icon={"algorithm"} className={"archive__title__icon"} size={iconSize} />;
  }

  return <KIcon icon={"page"} className={"archive__title__icon"} size={iconSize} />;
}

export default memo(ArchiveTitleIcon);
