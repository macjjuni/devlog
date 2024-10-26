"use client";

import { useMemo } from "react";
import useCategoryName from "@/hook/useCategoryName";
import useSearchText from "@/hook/useSearchText";
import ArchiveTitleIcon from "@/component/archive/archiveTitle/archiveTitleIcon";
import { ArchiveData } from "@/@types/archive";
import { capitalizeFirstLetter } from "@/utils/string";
import "./archiveTitle.scss";

export default function ArchiveTitle({ archives }: { archives: ArchiveData[] }) {
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
      {capitalizeFirstLetter(archiveTitleText)}
      {`(${archives.length})`}
    </h2>
  );
}
