import CategoryItemStyled from './style'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { verticalPostCatItemMotion } from '@/utils/framer'

const menuText = 'category'

const CategoryItem = ({ text }: { text: string }) => {
  const { query } = useRouter()
  const lowText = text.toLowerCase()

  return (
    <CategoryItemStyled variants={verticalPostCatItemMotion} active={query.id?.includes(lowText) ? 'active' : 'origin'}>
      <Link href={`/blog/${menuText}/${lowText}`}>{text}</Link>
    </CategoryItemStyled>
  )
}

export default CategoryItem
