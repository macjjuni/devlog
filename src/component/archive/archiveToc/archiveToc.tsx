import "./archiveToc.scss";
import { textToId } from "@/utils/string";

interface ArchiveTocProps {
  source: string;
}

function removeHashtag(str: string) {
  return str?.replace(/^#+/, "").trim();
}

function getHeadingTocList(src: string) {
  return src.split("\n").filter((str) => str.match(/^#+/));
}

function getTocItemClass(str: string) {
  const hashTagCount = (str.match(/#/g) || []).length;

  if (hashTagCount === 1) {
    return "archive__toc__container__list__item--first";
  }
  if (hashTagCount === 2) {
    return "archive__toc__container__list__item--second";
  }
  if (hashTagCount === 3) {
    return "archive__toc__container__list__item--third";
  }
  if (hashTagCount === 4) {
    return "archive__toc__container__list__item--fourth";
  }
  if (hashTagCount === 5) {
    return "archive__toc__container__list__item--fifth";
  }
  return "archive__toc__container__list__item--sixth";
}

export default function ArchiveToc({ source }: ArchiveTocProps) {
  const tocList = getHeadingTocList(source);

  return (
    <ul className={"archive__toc__container__list"}>
      <li className={"archive__toc__container__list__item archive__toc__container__list__item--header"}>
        Table of Contents
      </li>
      {tocList.map((tocItem) => (
        <li key={tocItem} className={`archive__toc__container__list__item ${getTocItemClass(tocItem)}`}>
          <a className={"archive__toc__container__list__item__link"}
            href={`#${textToId(removeHashtag(tocItem))}`}>
            {removeHashtag(tocItem)}
          </a>
        </li>
      ))}
    </ul>
  );
}
