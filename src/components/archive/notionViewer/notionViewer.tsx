"use client";

import { useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { commentElementId } from "@/components/archive/archiveComment";

import type { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";
import PageCover from "./pageCover";


const Code = dynamic(() => import("react-notion-x/build/third-party/code").then((m) => m.Code), { ssr: true });
const Collection = dynamic(() => import("react-notion-x/build/third-party/collection").then((m) => m.Collection));
const Equation = dynamic(() => import("react-notion-x/build/third-party/equation").then((m) => m.Equation));

interface INotionRender {
  recordMap: ExtendedRecordMap;
  coverUrl?: string;
  alt: string;
}

export default function NotionViewer({ recordMap, coverUrl, alt }: INotionRender) {
  const { push } = useRouter();

  const goBack = () => {
    push("/archive", { scroll: true });
  };

  // TOC 리스트에 댓글, 목차 항목 추가
  const appendTocLinks = useCallback(() => {
    const tocWrap = document.getElementsByClassName("notion-aside-table-of-contents-header")[0] as HTMLDivElement;
    const tocList = document.getElementsByClassName("notion-table-of-contents")[0] as HTMLDivElement;

    if (!tocWrap || !tocList) return;
    tocWrap.textContent = "📋 목차";
    const links = {
      comment: document.createElement("a"),
      pages: document.createElement("a"),
    };

    // key 값 배열로 저장
    const linkKeys = Object.keys(links) as Array<keyof typeof links>;

    links.comment.textContent = "💬 댓글";
    links.comment.href = `#${commentElementId}`;
    links.pages.textContent = "📚 글 목록";
    links.pages.onclick = goBack;

    const paddingStyle = "4px 8px";
    links.comment.style.setProperty("padding", paddingStyle);
    links.pages.style.setProperty("padding", paddingStyle);

    linkKeys.forEach((key) => {
      links[key].className = "notion-table-of-contents-item notion-table-of-contents-item-indent-level-0";
    });
    tocList.appendChild(links.comment);
    tocList.appendChild(links.pages);
  }, []);

  useEffect(() => {
    appendTocLinks();
  }, []);

  return (
    <NotionRenderer
      fullPage
      disableHeader
      showTableOfContents
      pageCover={coverUrl && <PageCover url={coverUrl} alt={alt} />}
      minTableOfContentsItems={0}
      recordMap={recordMap}
      components={{
        propertyDateValue: (dateProperty) => dateProperty.data[0][1][0][1].start_date,
        nextImage: Image,
        nextLink: Link,
        Code,
        Collection,
        Equation,
      }}
    />
  );
}
