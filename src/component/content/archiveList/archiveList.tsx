"use client";

import { memo, useMemo } from "react";
import Link from "next/link";
import type { IPage } from "@/@types/notion";
import config from "@/config/notion.config";
import usePageSize from "@/hook/usePageSize";
import "./archiveList.scss";
import useCategoryName from "@/hook/useCategoryName";

interface ArchiveListProps {
  list: IPage[];
}

const { POSTS_PER_PAGE } = config.post;

function ArchiveList({ list }: ArchiveListProps) {
  // region [Hooks]

  const page = usePageSize("page");
  const categoryName = useCategoryName();

  // endregion

  // region [Privates]

  const pageList = useMemo(() => list.slice(POSTS_PER_PAGE * (page - 1), POSTS_PER_PAGE * page), [page, list]);

  const categoryPageCount = useMemo(() => list.length, [list]);

  // endregion

  return (
    <>
      <h2 className="archive__title">
        {categoryName || "All"}({categoryPageCount})
      </h2>
      <ul className="archive__list">
        {pageList.map((listItem) => (
          <li key={listItem.id} className="archive__list__item">
            <Link href={`/archive/${listItem.id}`} className="archive__list__item__link">
              <h3 className="archive__list__item__title">{listItem.title}</h3>
              {/* TODO. 날짜 포멧 변환 해야함! YYYY.MM.DD */}
              <p className="archive__list__item__date">{listItem.published}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default memo(ArchiveList);
