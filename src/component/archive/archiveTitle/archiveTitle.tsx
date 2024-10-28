"use client";

import { useMemo } from "react";
import { useCategoryName, useSearchText } from "@/hook";
import ArchiveTitleIcon from "@/component/archive/archiveTitle/archiveTitleIcon";
import { capitalizeFirstLetter } from "@/utils/string";
import "./archiveTitle.scss";

export default function ArchiveTitle({ totalLength }: { totalLength: number }) {
  // region [Hooks]

  const categoryName = useCategoryName();
  const keyword = useSearchText();

  // endregion

  // region [Hooks]

  const archiveTitleText = useMemo(() => {
    if (categoryName && !keyword) {
      return categoryName;
    }
    if (!categoryName && keyword) {
      return keyword;
    }
    return "All";
  }, [categoryName, keyword]);

  // endregion

  return (
    <h2 className="archive__title">
      <ArchiveTitleIcon title={archiveTitleText} />
      {`${capitalizeFirstLetter(archiveTitleText)}(${totalLength})`}
    </h2>
  );
}
