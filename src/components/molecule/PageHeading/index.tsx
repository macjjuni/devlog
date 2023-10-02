import { useCallback } from 'react'
import SearchBar from '@/components/molecule/SearchBar'
// import common from '@/styles/common'

const defaultStyle = `text-pageHeading`

interface IPageHeading {
  title?: string | string[]
  count: number
  isSearch?: boolean
}

const PageHeading = ({ title, count, isSearch = false }: IPageHeading) => {
  const switchTitle = useCallback(() => {
    if (typeof title === 'object' && title.length > 0) return title[0]
    if (title) return title
    return 'All'
  }, [title])

  return (
    <div className="flex justify-between items-center lg:py-md mb-md">
      <h1 className={defaultStyle}>{`${switchTitle()} (${count})`}</h1>
      {isSearch && <SearchBar />}
    </div>
  )
}

export default PageHeading
