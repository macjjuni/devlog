import { useCallback } from 'react'
import SearchBar from '@/components/molecule/SearchBar'
// import common from '@/styles/common'

const defaultStyle = `text-pageHeading`

interface IPageHeading {
  title?: string | string[]
  count: number
}

const PageHeading = ({ title, count }: IPageHeading) => {
  const switchTitle = useCallback(() => {
    if (typeof title === 'object' && title.length > 0) return title[0]
    if (title) return title
    return 'All'
  }, [title])

  return (
    <div className="flex justify-between items-center p-md mb-md">
      <h1 className={defaultStyle}>{`${switchTitle()} (${count})`}</h1>
      <SearchBar />
    </div>
  )
}

export default PageHeading
