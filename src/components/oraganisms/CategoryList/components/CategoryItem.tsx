import { useRouter } from 'next/router'
import Link from 'next/link'
import { verticalPostCatItemMotion } from '@/utils/framer'
import CategoryStyled from '../style'

const CategoryItem = ({ categoryName, path }: { categoryName: string; path: string }) => {
  const { query } = useRouter()

  // 현재 카테고리에 맞는 페이지인지 체크
  const activeChekcer = () => {
    if (categoryName.toLowerCase() === 'all' && query.id === undefined) return 'active'
    return query.id?.includes(categoryName.toLowerCase()) ? 'active' : 'origin'
  }

  return (
    <CategoryStyled.Item active={activeChekcer()} variants={verticalPostCatItemMotion}>
      <Link href={path}>{categoryName}</Link>
    </CategoryStyled.Item>
  )
}

export default CategoryItem
