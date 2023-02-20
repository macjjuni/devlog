import Link from 'next/link'
import * as P from './BlogPagination.style'
import { PAGINATION_RANGE, POSTS_PER_PAGE } from '../../../notion/config'

interface PaginationButtonProps {
  children: React.ReactNode
  disabled?: boolean
  to: number
}
const PaginationButton = ({ children, to, disabled = false }: PaginationButtonProps) => {
  return (
    <Link href={{ query: { page: to } }}>
      <P.PageButton disabled={disabled}>{children}</P.PageButton>
    </Link>
  )
}

interface PaginationProps {
  current: number
  total: number
}
const BlogPagination = ({ current, total }: PaginationProps) => {
  const lastPageNumber = Math.ceil(total / POSTS_PER_PAGE)

  return (
    <P.PageWrap>
      <PaginationButton to={current - 1} disabled={current === 1}>
        &lt;
      </PaginationButton>

      {Array.from(Array(PAGINATION_RANGE), (_, index) => current - index - 1)
        .reverse()
        .map((pageIndex) =>
          pageIndex > 0 ? (
            <PaginationButton key={pageIndex} to={pageIndex}>
              {pageIndex}
            </PaginationButton>
          ) : null
        )}

      <P.PageButton className="active">{current}</P.PageButton>

      {Array.from(Array(PAGINATION_RANGE), (_, index) => current + index + 1).map((pageIndex) =>
        pageIndex <= lastPageNumber ? (
          <PaginationButton key={pageIndex} to={pageIndex}>
            {pageIndex}
          </PaginationButton>
        ) : null
      )}

      <PaginationButton to={current + 1} disabled={current === lastPageNumber}>
        &gt;
      </PaginationButton>
    </P.PageWrap>
  )
}

export default BlogPagination
