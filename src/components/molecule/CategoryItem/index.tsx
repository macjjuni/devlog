import Link from 'next/link'
import { useRouter } from 'next/router'
import { verticalPostCatItemMotion } from '@/utils/framer'
import CategoryItemStyled from './style'

const menuText = 'category'

const CategoryItem = ({ text }: { text: string }) => {
  const { query } = useRouter()
  const lowText = text.toLowerCase()

  return (
    <CategoryItemStyled variants={verticalPostCatItemMotion} active={query.id?.includes(lowText) ? 'active' : 'origin'} category={lowText}>
      <Link href={`/blog/${menuText}/${lowText}`}>{text}</Link>
    </CategoryItemStyled>
  )
}

export default CategoryItem
