"use client";

import { memo, useCallback, useMemo } from "react";
import Link from "next/link";
import config from "@/config/notion.config";
import usePageSize from "@/hook/usePageSize";
import type { NotionPageProps } from "@/@types/notion";
import { calcCurrentDateDifference, getFormatDate } from "@/lib/date";
import "./archiveList.scss";

const { post } = config;

function ArchiveList({ pages }: { pages: NotionPageProps[] }) {
  // region [Hooks]

  const page = usePageSize("page");

  // endregion

  // region [Privates]

  const pageList = useMemo(() => pages.slice(post.POSTS_PER_PAGE * (page - 1), post.POSTS_PER_PAGE * page), [page, pages]);
  const isNew = useCallback((dateStr: string) => (post.RECENT_DAY > calcCurrentDateDifference(dateStr, "day")), []);

  // endregion

  return (
    <ul className="archive__list">
      {pageList.map((listItem) => (
        <li key={listItem.id} className="archive__list__item">
          <Link href={`/archive/${listItem.id}`} className={`archive__list__item__link${isNew(listItem.published) ? " new" : ""}`} suppressHydrationWarning>
            <h3 className="archive__list__item__title">{listItem.title}</h3>
            <div className="archive__list__item__right">
              <p>{listItem.category?.name}</p>
              <p>{getFormatDate(listItem.published)}</p>
            </div>
          </Link>
        </li>
      ))}
      {pageList.length === 0 && <li className="archive__list__item-no-text">검색 결과가 없습니다.</li>}
    </ul>
  );
}

export default memo(ArchiveList);
