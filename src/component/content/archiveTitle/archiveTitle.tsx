"use client";

import { memo } from "react";
import useCategoryName from "@/hook/useCategoryName";
import type { NotionPageProps } from "@/@types/notion";
import "./archiveTitle.scss";

function ArchiveTitle({ pages }: { pages: NotionPageProps[] }) {
  // region [Hooks]

  const categoryName = useCategoryName();

  // endregion

  return (
    <h2 className="archive__title">
      {categoryName || "All"}
      {`(${pages.length})`}
    </h2>
  );
}

export default memo(ArchiveTitle);
