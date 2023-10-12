import { categoryListMotion } from '@/utils/framer'
import { ICategory, IPage } from '@/@types/notion'
import { motion } from 'framer-motion'
import common from '@/styles/common'
import config from '@/config/notion.config'
import CategoryItem from './components/CategoryItem'

const { blog } = config

const defaultStyle = `flex whitespace-nowrap overflow-x-auto no-scroll ${common.borderColor}`
const mobileStyle = 'flex-row gap-sm border-b pb-md'
const desktopStyle = 'md:flex-col md:gap-0 md:border-none'
const mergeStyle = `${defaultStyle} ${mobileStyle} ${desktopStyle}`

const CategoryList = ({ categories = null, pages }: { categories: ICategory; pages: IPage[] }) => {
  const pageCounter = (catName: string) => {
    const group = pages.filter((page) => page?.category?.name.toLowerCase() === catName.toLowerCase())
    return group.length
  }

  return (
    <div className="mt-xl md:my-xl">
      <h3 className="text-categoryTitle py-sm mb-sm">📚 분류</h3>
      <motion.ul className={mergeStyle} initial="hidden" animate="show" variants={categoryListMotion}>
        <CategoryItem categoryName="📚 All" count={pages.length} path="/blog" />
        {categories?.map((item) => (
          <CategoryItem
            key={item.id}
            categoryName={item.name}
            count={pageCounter(item.name)}
            path={`/${blog.POST_PATH}/${blog.CATEGORY_PATH}/${encodeURIComponent(item.name)}`}
          />
        ))}
      </motion.ul>
    </div>
  )
}

export default CategoryList
