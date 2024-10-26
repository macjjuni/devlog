"use client";

import { useMemo, memo } from "react";
import { useRouter } from "next/navigation";
import usePageSize from "@/hook/usePageSize";
import { KIcon } from "kku-ui";
import config from "@/config/notion.config";
import PageButton from "./pageButton";
import "./pagination.scss";

interface IPagination {
  total: number;
}

// 페이지네이션 기본 옵션
const { POSTS_PER_PAGE, PAGINATION_RANGE } = config.archive;

export default function Pagination({ total }: IPagination) {
  // region [Hooks]

  const { replace } = useRouter();
  const pageSize = usePageSize("page");

  // 숫자 형식이 아닌 페이지 사이즈 접근 에러 핸들링(use client)
  if (Number.isNaN(pageSize)) {
    replace("/404");
  }

  const current = Number(pageSize);
  const lastPageNumber = Math.ceil(total / POSTS_PER_PAGE);

  // 페이지네이션 오버될 때 에러 핸들링 && 페이지 검색결과 없을 때 제외
  if (pageSize > lastPageNumber && lastPageNumber !== 0) {
    replace("/404");
  }

  // endregion

  // region [Templates]

  const prevButtonDisabled = useMemo(() => current === 1, [current]);
  const nextButtonDisabled = useMemo(() => current === lastPageNumber || lastPageNumber === 0, [current, lastPageNumber]);

  const prevIcon = useMemo(() => <KIcon size={18} icon="keyboard_arrow_down" color="inherit" />, []);
  const nextIcon = useMemo(() => <KIcon size={18} icon="keyboard_arrow_down" color="inherit" />, []);

  const extraButton = useMemo(() => <PageButton href="#" active={false} disabled text="··" className="pagination__extra-button" />, []);

  const prevPageNumbers = useMemo(() => Array.from(Array(PAGINATION_RANGE), (_, index) => current - index - 1).reverse(), [PAGINATION_RANGE, current]);
  const nextPageNumbers = useMemo(() => Array.from(Array(PAGINATION_RANGE), (_, index) => current + index + 1), [PAGINATION_RANGE, current]);

  const firstEllipsis = useMemo(() => !prevPageNumbers.includes(1) && current !== 1 && extraButton, [prevPageNumbers, current, extraButton]);
  const lastEllipsis = useMemo(() => !nextPageNumbers.includes(lastPageNumber) && current !== lastPageNumber && extraButton, [nextPageNumbers, lastPageNumber, extraButton]);

  // endregion

  return (
    <div className="pagination">
      {/* 이전 버튼 */}
      <PageButton href={current - 1} icon={prevIcon} disabled={prevButtonDisabled} className="pagination__prev-button" />
      {/* 줄임표 버튼 */}
      {firstEllipsis}
      {/* 현재 페이지 이전 숫자들 */}
      {prevPageNumbers.map((pageIndex) => pageIndex > 0 && <PageButton key={pageIndex} href={pageIndex} text={pageIndex} className="pagination__number-button" />)}
      {/* 현재 페이지 */}
      <PageButton href={current} text={current} active className="pagination__number-button" />
      {/* 현재 페이지 이후 숫자들 */}
      {nextPageNumbers.map((pageIndex) => pageIndex <= lastPageNumber && <PageButton key={pageIndex} href={pageIndex} text={pageIndex} className="pagination__number-button" />)}
      {/* 줄임표 버튼 */}
      {lastEllipsis}
      {/* 다음 버튼 */}
      <PageButton href={current + 1} icon={nextIcon} disabled={nextButtonDisabled} className="pagination__next-button" />
    </div>
  );
}
