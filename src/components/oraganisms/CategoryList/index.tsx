import { useEffect } from 'react'
import Link from 'next/link'
import CategoryListStyled from './style'
import CategoryItemStyled from '@/components/molecule/CategoryItem/style'
import { verticalPostCatListMotion } from '@/utils/framer'
import CategoryItem from '@/components/molecule/CategoryItem'
import { ICategory } from '@/types/notion'
import { useRouter } from 'next/router'
import { cates } from '@/route'

const CategoryList = ({ list }: { list: ICategory[] }) => {
  const { pathname, query, push, isReady } = useRouter()

  const isBlog = !query.id && pathname.includes('blog')

  const pathChecker = () => {
    if (!isReady) return
    if (isBlog) return // blog 메인 페이지인 경우
    else if (typeof query.id === 'string') {
      // 존재하지 않은 카테고리 명인 경우 블로그 홈으로 이동
      const isContain = cates.find((cate) => cate.title.toLowerCase() === query.id)
      if (!isContain) push('/blog')
    }
  }

  useEffect(() => {
    pathChecker()
  }, [pathname, isReady])

  return (
    <CategoryListStyled.Wrap>
      <CategoryListStyled.List initial="hidden" animate="visible" variants={verticalPostCatListMotion}>
        <CategoryItemStyled active={isBlog ? 'active' : ''}>
          <Link href={`/blog`}>All</Link>
        </CategoryItemStyled>
        {list.map((item) => (
          <CategoryItem key={item.id} text={item.title} />
        ))}
      </CategoryListStyled.List>
    </CategoryListStyled.Wrap>
  )
}

export default CategoryList
