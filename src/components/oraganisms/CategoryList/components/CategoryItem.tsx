import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { verticalPostCatItemMotion } from '@/utils/framer'
import common from '@/styles/common'

interface ICatItem {
  categoryName: string
  path: string
  count: number
}

const defaultStyle = `flex px-lg py-sm rounded-md whitespace-nowrap ${common.trs} ${common.categoryItemHover}`
const normalStyle = `${defaultStyle} text-category`
const activeStyle = `${defaultStyle} text-categoryActive underline ${common.categoryItemActive}`

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
    <motion.li variants={verticalPostCatItemMotion}>
      <Link href={path} className={activeChekcer()}>
        {`${categoryName}(${count})`}
      </Link>
    </motion.li>
  )
}

export default CategoryItem
