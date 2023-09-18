import { useEffect } from 'react'
import { verticalPostCatListMotion } from '@/utils/framer'
import { ICategory, IPage } from '@/types/notion'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import CategoryItem from './components/CategoryItem'

const CategoryList = ({ categories = null, pages }: { categories: ICategory; pages: IPage[] }) => {
  const { pathname, query, push, replace, isReady } = useRouter()
  const isBlog = !query.id && pathname.includes('blog')

  const pathChecker = () => {
    if (!isReady) return
    if (!isBlog) {
      // blog 메인 페이지인 경우
      if (typeof query.id === 'string' && categories !== null) {
        // 존재하지 않은 카테고리 명인 경우 블로그 홈으로 이동
        const isContain = categories.find((cate) => cate.name.toLowerCase() === query.id)
        if (!isContain) push('/blog')
      }
      return replace('/404')
    }
  }

  const pageCounter = (catName: string) => {
    const group = pages.filter((page) => page?.category?.name.toLowerCase() === catName.toLowerCase())
    return group.length
  }

  useEffect(() => {
    pathChecker()
  }, [pathname, isReady])

  return (
    <motion.ul className="flex flex-col p-sm" initial="hidden" animate="show" variants={verticalPostCatListMotion}>
      <CategoryItem categoryName="All" count={pages.length} path="/blog" />
      {categories?.map((item) => (
        <CategoryItem key={item.id} categoryName={item.name} count={pageCounter(item.name)} path={`/blog/category/${encodeURIComponent(item.name)}`} />
      ))}
    </motion.ul>
  )
}

export default CategoryList
