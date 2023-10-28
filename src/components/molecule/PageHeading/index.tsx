import { useCallback } from 'react'
import SearchBar from '@/components/molecule/SearchBar'
import dynamic from 'next/dynamic'

const CategorySvg = dynamic(() => import('@/components/molecule/CategorySvg'), { ssr: false })

const defaultStyle = `flex justoify-start items-center gap-xs md:gap-sm text-[20px] md:text-pageHeading`
const svgStyle = 'scale-[0.8] md:scale-[1]'

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
        <div className={svgStyle}>
          <CategorySvg category={switchTitle()} size={36} />
        </div>
        {`${switchTitle()}(${count})`}
      </h1>
      {isSearch && <SearchBar />}
    </div>
  )
}

export default PageHeading
