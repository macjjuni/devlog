"use client";

import useCategoryName from "@/hook/useCategoryName";
import type { PostMeta } from "@/@types/post";
import useSearchText from "@/hook/useSearchText";

export default function ArchiveTitle({ pages }: { pages: PostMeta[] }) {
  const categoryName = useCategoryName();
  const keyword = useSearchText();

  const title = (categoryName && !keyword) ? categoryName : (keyword || "All");

  return (
    <h2>
      <span>{title}</span>
      <span>{pages.length}</span>
    </h2>
  );
}
