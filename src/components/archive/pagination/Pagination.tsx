"use client";

import { useMemo, memo, useEffect } from "react";
import { useRouter } from "next/navigation";
import usePageSize from "@/hook/usePageSize";
import blogConfig from "@/config/blog.config";
import PageButton from "./PageButton";

interface IPagination {
  total: number;
}

// 페이지네이션 기본 옵션
const { POSTS_PER_PAGE, PAGINATION_RANGE } = blogConfig.post;

const Pagination = ({ total }: IPagination) => {
  // region [Hooks]

  const { replace } = useRouter();
  const pageSize = usePageSize("page");

  const current = Number(pageSize);
  const lastPageNumber = Math.ceil(total / POSTS_PER_PAGE);

  // 에러 핸들링: useEffect로 이동하여 렌더링 중 side effect 방지
  useEffect(() => {
    // 숫자 형식이 아닌 페이지 사이즈 접근 에러 핸들링
    if (Number.isNaN(pageSize)) {
      replace("/404");
      return;
    }

    // 페이지네이션 오버될 때 에러 핸들링 && 페이지 검색결과 없을 때 제외
    if (pageSize > lastPageNumber && lastPageNumber !== 0) {
      replace("/404");
    }
  }, [pageSize, lastPageNumber, replace]);

  // endregion

  // region [Templates]

  const prevButtonDisabled = useMemo(() => current === 1, [current]);
  const nextButtonDisabled = useMemo(() => current === lastPageNumber || lastPageNumber === 0, [current, lastPageNumber]);

  const extraButton = <PageButton href="#" disabled text="···" />;

  const prevPageNumbers = useMemo(() => Array.from(Array(PAGINATION_RANGE), (_, index) => current - index - 1).reverse(), [current]);
  const nextPageNumbers = useMemo(() => Array.from(Array(PAGINATION_RANGE), (_, index) => current + index + 1), [current]);

  const validPrevPageNumbers = useMemo(() => prevPageNumbers.filter((pageIndex) => pageIndex > 0), [prevPageNumbers]);
  const validNextPageNumbers = useMemo(() => nextPageNumbers.filter((pageIndex) => pageIndex <= lastPageNumber), [nextPageNumbers, lastPageNumber]);

  const showFirstEllipsis = useMemo(() => !prevPageNumbers.includes(1) && current !== 1, [prevPageNumbers, current]);
  const showLastEllipsis = useMemo(() => !nextPageNumbers.includes(lastPageNumber) && current !== lastPageNumber, [nextPageNumbers, lastPageNumber, current]);

  // endregion

  return (
    <div className="flex items-center justify-center gap-1 py-4">
      <PageButton href={current - 1} icon={<span>&lt; prev</span>} disabled={prevButtonDisabled} />
      {showFirstEllipsis && extraButton}
      {validPrevPageNumbers.map((pageIndex) => <PageButton key={pageIndex} href={pageIndex} text={pageIndex} />)}
      <PageButton href={current} text={current} active />
      {validNextPageNumbers.map((pageIndex) => <PageButton key={pageIndex} href={pageIndex} text={pageIndex} />)}
      {showLastEllipsis && extraButton}
      <PageButton href={current + 1} icon={<span>next &gt;</span>} disabled={nextButtonDisabled} />
    </div>
  );
};
export default memo(Pagination);
