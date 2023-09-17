import { useRouter } from 'next/router'
import Link from 'next/link'
import { verticalPostCatItemMotion } from '@/utils/framer'
import CategoryStyled from '../style'

interface ICatItem {
  categoryName: string
  path: string
  count: number
}

const CategoryItem = ({ categoryName, path, count }: ICatItem) => {
  const { query } = useRouter()

  const catName = query?.name as string | undefined
  const lowerCatName = categoryName.toLowerCase()

  // 현재 카테고리에 맞는 페이지인지 체크
  const activeChekcer = () => {
    if (lowerCatName.includes('all') && catName === undefined) return 'active'
    if (catName === undefined) return 'origin'
    return lowerCatName.includes(catName.toLowerCase()) ? 'active' : 'origin'
  }

  return (
    <CategoryStyled.Item data-active={activeChekcer()} variants={verticalPostCatItemMotion}>
      <Link href={path}>
        {categoryName} ({count})
      </Link>
    </CategoryStyled.Item>
  )
}

export default CategoryItem
