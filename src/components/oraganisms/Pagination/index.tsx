import config from '@/config/notion.config'
import { BiCaretLeft, BiCaretRight } from 'react-icons/bi'
import PagiButton from './components/PagiButton'

interface IPagination {
  current: number
  total: number
}

// 페이지네이션 기본 옵션
const { POSTS_PER_PAGE, PAGINATION_RANGE } = config.post

const Pagination = ({ current, total }: IPagination) => {
  const lastPageNumber = Math.ceil(total / POSTS_PER_PAGE)

  return (
    <div className="flex items-center justify-center gap-sm w-full py-md">
      <PagiButton href={current - 1} icon={<BiCaretLeft fontSize={20} />} disabled={current === 1} />

      {Array.from(Array(PAGINATION_RANGE), (_, index) => current - index - 1)
        .reverse()
        .map((pageIndex) => (pageIndex > 0 ? <PagiButton key={pageIndex} href={pageIndex} text={pageIndex} /> : null))}

      {/* 현재 페이지 */}
      <PagiButton href={current} text={current} active />

      {Array.from(Array(PAGINATION_RANGE), (_, index) => current + index + 1).map((pageIndex) =>
        pageIndex <= lastPageNumber ? <PagiButton key={pageIndex} href={pageIndex} text={pageIndex} /> : null,
      )}

      <PagiButton href={current + 1} icon={<BiCaretRight fontSize={20} />} disabled={current === lastPageNumber} />
    </div>
  )
}

export default Pagination
