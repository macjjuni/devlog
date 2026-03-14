"use client";

import useCategoryName from "@/hook/useCategoryName";
import type { PostMeta } from "@/@types/post";
import useSearchText from "@/hook/useSearchText";

export default function ArchiveTitle({ pages }: { pages: PostMeta[] }) {
  const categoryName = useCategoryName();
  const keyword = useSearchText();

  const title = (categoryName && !keyword) ? categoryName : (keyword || "All");

  return (
    <h2 className="flex items-center justify-start gap-2 pl-2 text-2xl font-medium desktop:text-[1.5rem]">
      <span>{title}</span>
      <span className="text-gray-400">{`(${pages.length})`}</span>
    </h2>
  );
}
