"use server";

import config from "@/config/config";
import { useServerPathname } from "@/hook";

const { allText } = config.category;

function removePageParam(url: string) {
  const index = url.indexOf("?page=");
  return index !== -1 ? url.slice(0, index) : url;
}

export default async function useCurrentCategory() {
  const pathname = await useServerPathname();

  if (!pathname) {
    return "";
  }

  const slicedArchivePathname = removePageParam(pathname).split("/archive");

  // 아카이브 메인 페이지
  if (!slicedArchivePathname || slicedArchivePathname[1] === "" || slicedArchivePathname[1].includes("?page=")) {
    return allText;
  }

  // 검색 페이지
  if (slicedArchivePathname[1].includes("/search?q=")) {
    return "";
  }

  const slicedCategoryPathname = slicedArchivePathname[1].split("/category");

  // 카테고리 페이지
  return slicedCategoryPathname[1].startsWith("/") ? slicedCategoryPathname[1].slice(1) : slicedCategoryPathname[1];
}
