"use client";

import { memo, useMemo } from "react";
import useCategoryName from "@/hook/useCategoryName";
import type { NotionPageProps } from "@/@types/notion";
import "./archiveTitle.scss";
import useSearchText from "@/hook/useSearchText";

function ArchiveTitle({ pages }: { pages: NotionPageProps[] }) {
  // region [Hooks]

  const categoryName = useCategoryName();
  const keyword = useSearchText();

  // endregion

  // region [Hooks]

  const archiveTitleText = useMemo(() => {
    if (!categoryName && !keyword) {
      return "All";
    }
    if (categoryName && !keyword) {
      return categoryName;
    }
    if (!categoryName && keyword) {
      return keyword;
    }
  }, [categoryName, keyword]);

  // endregion

  return (
    <h2 className="archive__title">
      {archiveTitleText}
      {`(${pages.length})`}
    </h2>
  );
}

export default memo(ArchiveTitle);
