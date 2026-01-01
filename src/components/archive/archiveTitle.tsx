"use client";

import useCategoryName from "@/hook/useCategoryName";
import type { NotionPageProps } from "@/@types/notion";
import useSearchText from "@/hook/useSearchText";

export default function ArchiveTitle({ pages }: { pages: NotionPageProps[] }) {
  const categoryName = useCategoryName();
  const keyword = useSearchText();

  // React Compiler가 최적화하므로 useMemo 제거
  // 로직을 변수로 추출하여 가독성 확보
  const title = (categoryName && !keyword) ? categoryName : (keyword || "All");

  return (
    <h2 className="flex items-center justify-start gap-2 pl-2 text-2xl font-medium desktop:text-[1.5rem]">
      <span>{title}</span>
      <span className="text-gray-400">{`(${pages.length})`}</span>
    </h2>
  );
}