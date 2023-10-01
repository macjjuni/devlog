import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { categoryItemMotion } from '@/utils/framer'

interface ICatItem {
  categoryName: string
  path: string
  count: number
}

const defaultStyle = `cate-item flex px-md py-sm md:px-lg text-category rounded-xs whitespace-nowrap hover:border hover:border-BLG400 hover:bg-BLG50 dark:hover:border-BLG600 dark:hover:bg-BLG800`
const normalStyle = `${defaultStyle}`
const activeStyle = `${defaultStyle} underline font-bold border border-BLG400 dark:border-BLG600 bg-BLG50 dark:bg-BLG800`

const CategoryItem = ({ categoryName, path, count }: ICatItem) => {
  const { query } = useRouter()

  const catName = query?.name as string | undefined
  const lowerCatName = categoryName.toLowerCase()

  // 현재 카테고리에 맞는 페이지인지 체크
  const activeChekcer = () => {
    if (query?.keyword) return normalStyle
    if (lowerCatName.includes('all') && catName === undefined) return activeStyle
    if (catName === undefined) return normalStyle
    return lowerCatName.includes(catName.toLowerCase()) ? activeStyle : normalStyle
  }

  return (
    <motion.li variants={categoryItemMotion}>
      <Link href={path} className={activeChekcer()}>
        {`${categoryName}(${count})`}
      </Link>
    </motion.li>
  )
}

export default CategoryItem
