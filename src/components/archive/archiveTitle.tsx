"use client";

import useCategoryName from "@/hook/useCategoryName";
import type { PostMeta } from "@/@types/post";
import useSearchText from "@/hook/useSearchText";

export default function ArchiveTitle({ pages }: { pages: PostMeta[] }) {
  const categoryName = useCategoryName();
  const keyword = useSearchText();

  const title = (categoryName && !keyword) ? categoryName : (keyword || "All");

  return (
    <h2 className="flex items-center gap-2 px-3 pb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
      <span>{title}</span>
      <span className="text-sm font-normal text-gray-400 dark:text-gray-500">{pages.length}</span>
    </h2>
  );
}
