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
    <ul className="border-t border-terminal-border">
      {pageList.map((listItem) => {
        const isNew = checkNew(listItem.date);

        return (
          <li key={listItem.slug} className="border-b border-terminal-border">
            <Link
              href={`/archive/${listItem.slug}`}
              suppressHydrationWarning
              className="flex items-center gap-3 px-3 py-3 transition-all hover:bg-surface rounded group"
            >
              <span className="text-xs text-terminal-dim whitespace-nowrap">{getFormatDate(listItem.date)}</span>
              <h3 className="flex-1 text-sm text-terminal-text group-hover:text-terminal-amber transition-colors truncate">{listItem.title}</h3>
              {isNew && <span className="text-xs text-white bg-terminal-amber px-1.5 py-0.5 rounded font-bold">NEW</span>}
            </Link>
          </li>
        );
      })}

      {pageList.length === 0 && (
        <li className="px-3 py-6 text-sm text-terminal-dim text-center">검색 결과가 없습니다.</li>
      )}
    </ul>
  );
}
