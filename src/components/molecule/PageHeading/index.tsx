import { useCallback } from 'react'
import SearchBar from '@/components/molecule/SearchBar'
import dynamic from 'next/dynamic'

const CategorySvg = dynamic(() => import('@/components/molecule/CategorySvg'), { ssr: false })

const defaultStyle = `flex justoify-start items-center gap-sm text-pageHeading`

interface IPageHeading {
  title?: string | string[]
  count: number
  isSearch?: boolean
}

const PageHeading = ({ title, count, isSearch = false }: IPageHeading) => {
  const switchTitle = useCallback(() => {
    if (typeof title === 'object') return title[0]
    else if (title) return title
    return 'All'
  }, [title])

  return (
    <div className="flex justify-between items-center lg:pb-md mb-md">
      <h1 className={defaultStyle}>
        <CategorySvg category={switchTitle()} size={36} />
        {`${switchTitle()} (${count})`}
      </h1>
      {isSearch && <SearchBar />}
    </div>
  )
}

export default PageHeading
