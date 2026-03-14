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
    <ul className="flex flex-col">
      {pageList.map((listItem) => {
        const isNew = checkNew(listItem.date);

        return (
          <li key={listItem.slug} className="group relative before:absolute before:bottom-[-0.5px] before:left-1 before:h-[0.5px] before:w-[calc(100%-8px)] before:bg-gray-200 before:transition-opacity before:content-[''] hover:before:opacity-0">
            <Link
              href={`/archive/${listItem.slug}`}
              className="relative flex items-center justify-between gap-2 rounded-[4px] px-6 py-3 transition-colors duration-300 hover:bg-gray-100 tablet:px-4 tablet:py-2"
              suppressHydrationWarning
            >
              {isNew && (
                <span className="absolute -top-[6px] -left-[6px] z-10 rounded-sm bg-black px-1.5 py-0.5 text-[10px] font-bold text-white shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                  NEW
                </span>
              )}
              <h3 className="w-[calc(100%-84px)] truncate text-lg font-medium tablet:w-[calc(100%-72px)] tablet:text-base">
                {listItem.title}
              </h3>

              <div className="relative flex w-[84px] flex-col items-center gap-1 pl-6 text-[12px] text-gray-400 after:absolute after:top-1/2 after:left-0 after:h-4/5 after:w-[0.5px] after:-translate-y-1/2 after:bg-gray-200 after:transition-colors after:content-[''] group-hover:after:bg-white tablet:w-[72px] tablet:text-[10px]">
                <p className="whitespace-nowrap">{listItem.category}</p>
                <p className="whitespace-nowrap">{getFormatDate(listItem.date)}</p>
              </div>
            </Link>
          </li>
        );
      })}

      {pageList.length === 0 && (
        <li className="flex h-40 items-center justify-center text-gray-500">
          검색 결과가 없습니다.
        </li>
      )}
    </ul>
  );
}
