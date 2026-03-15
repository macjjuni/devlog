"use client";

import { Link } from 'next-view-transitions'
import blogConfig from "@/config/blog.config";
import usePageSize from "@/hook/usePageSize";
import type { PostMeta } from "@/@types/post";
import { calcCurrentDateDifference, getFormatDate } from "@/lib/date";

const { post } = blogConfig;

export default function ArchiveList({ pages }: { pages: PostMeta[] }) {
  const page = usePageSize("page");

  const pageList = pages.slice(post.POSTS_PER_PAGE * (page - 1), post.POSTS_PER_PAGE * page);

  const checkNew = (dateStr: string) => post.RECENT_DAY > calcCurrentDateDifference(dateStr, "day");

  return (
    <ul>
      {pageList.map((listItem) => {
        const isNew = checkNew(listItem.date);

        return (
          <li key={listItem.slug}>
            <Link href={`/archive/${listItem.slug}`} suppressHydrationWarning>
              <h3>{listItem.title}</h3>
              {isNew && <span>NEW</span>}
              <span>{getFormatDate(listItem.date)}</span>
            </Link>
          </li>
        );
      })}

      {pageList.length === 0 && (
        <li>검색 결과가 없습니다.</li>
      )}
    </ul>
  );
}
