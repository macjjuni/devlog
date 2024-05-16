"use client";

import { KIcon } from "kku-ui";
import config from "@/config/notion.config";
import PageButton from "./pageButton";
import "./pagination.scss";

interface IPagination {
  current: number;
  total: number;
}

// 페이지네이션 기본 옵션
const { POSTS_PER_PAGE, PAGINATION_RANGE } = config.post;

const Pagination = ({ current, total }: IPagination) => {
  const lastPageNumber = Math.ceil(total / POSTS_PER_PAGE);

  return (
    <div className="pagination">
      <PageButton href={current - 1} icon={<KIcon small icon="keyboard_arrow_down" />} disabled={current === 1} />

      {Array.from(Array(PAGINATION_RANGE), (_, index) => current - index - 1)
        .reverse()
        .map((pageIndex) => (pageIndex > 0 ? <PageButton key={pageIndex} href={pageIndex} text={pageIndex} /> : null))}

      {/* 현재 페이지 */}
      <PageButton href={current} text={current} active />

      {Array.from(Array(PAGINATION_RANGE), (_, index) => current + index + 1).map((pageIndex) => (pageIndex <= lastPageNumber ? <PageButton key={pageIndex} href={pageIndex} text={pageIndex} /> : null))}

      <PageButton href={current + 1} icon={<KIcon small icon="keyboard_arrow_down" />} disabled={current === lastPageNumber} />
    </div>
  );
};

export default Pagination;
