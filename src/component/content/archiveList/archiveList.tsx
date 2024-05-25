"use client";

import { memo, useMemo } from "react";
import Link from "next/link";
import config from "@/config/notion.config";
import usePageSize from "@/hook/usePageSize";
import type { NotionPageProps } from "@/@types/notion";
import "./archiveList.scss";

const { POSTS_PER_PAGE } = config.post;

function ArchiveList({ pages }: { pages: NotionPageProps[] }) {
  // region [Hooks]

  const page = usePageSize("page");

  // endregion

  // region [Privates]

  const pageList = useMemo(() => pages.slice(POSTS_PER_PAGE * (page - 1), POSTS_PER_PAGE * page), [page, pages]);

  // endregion

  return (
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
      {
        pageList.length === 0 && (
          <li className="archive__list__item-no-text">
            검색 결과가 없습니다.
          </li>
        )
      }
    </ul>
  );
}

export default memo(ArchiveList);
