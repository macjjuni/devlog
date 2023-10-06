import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { categoryItemMotion } from '@/utils/framer'
import common from '@/styles/common'

interface ICatItem {
  categoryName: string
  path: string
  count: number
}

const defaultStyle = `flex px-md py-sm md:px-lg text-category rounded-xs whitespace-nowrap hover:underline ease transition-colors duration-300 ${common.textColor}`
const activeStyle = `${defaultStyle} underline font-bold border border-BLG400 dark:border-BLG600 bg-BLG50 dark:bg-BLG800`

const CategoryItem = ({ categoryName, path, count }: ICatItem) => {
  const { query } = useRouter()

  const catName = query?.name as string | undefined
  const lowerCatName = categoryName.toLowerCase()

  // 현재 카테고리에 맞는 페이지인지 체크
  const activeChekcer = () => {
    if (query?.keyword) return defaultStyle
    if (lowerCatName.includes('all') && catName === undefined) return activeStyle
    if (catName === undefined) return defaultStyle
    return lowerCatName.includes(catName.toLowerCase()) ? activeStyle : defaultStyle
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
