"use client";

import useCategoryName from "@/hook/useCategoryName";
import type { PostMeta } from "@/@types/post";
import useSearchText from "@/hook/useSearchText";

export default function ArchiveTitle({ pages }: { pages: PostMeta[] }) {
  const categoryName = useCategoryName();
  const keyword = useSearchText();

  const title = (categoryName && !keyword) ? categoryName : (keyword || "All");

  return (
    <h2 className="text-terminal-amber text-lg font-bold mb-4">
      <span className="text-terminal-dim">$</span> ls ./archive/<span>{title.toLowerCase()}</span>
      <span className="text-terminal-dim ml-2">({pages.length})</span>
    </h2>
  );
}
