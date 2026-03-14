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
    <ul className="flex flex-col gap-1">
      {pageList.map((listItem) => {
        const isNew = checkNew(listItem.date);

        return (
          <li key={listItem.slug}>
            <Link
              href={`/archive/${listItem.slug}`}
              className="group flex items-center justify-between gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50 tablet:px-2 tablet:py-2"
              suppressHydrationWarning
            >
              <div className="flex min-w-0 flex-1 items-center gap-2">
                <h3 className="truncate text-[15px] font-medium text-gray-800 group-hover:text-gray-950 dark:text-gray-200 dark:group-hover:text-white tablet:text-sm">
                  {listItem.title}
                </h3>
                {isNew && (
                  <span className="shrink-0 rounded bg-primary px-1.5 py-0.5 text-[10px] font-bold leading-none text-white">
                    NEW
                  </span>
                )}
              </div>

              <span className="shrink-0 text-xs text-gray-400 dark:text-gray-500">
                {getFormatDate(listItem.date)}
              </span>
            </Link>
          </li>
        );
      })}

      {pageList.length === 0 && (
        <li className="flex h-40 items-center justify-center text-sm text-gray-400">
          검색 결과가 없습니다.
        </li>
      )}
    </ul>
  );
}
