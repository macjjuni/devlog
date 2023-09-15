import { useEffect } from 'react'
import { verticalPostCatListMotion } from '@/utils/framer'
import { ICategory } from '@/types/notion'
import { useRouter } from 'next/router'
import { cates } from '@/route'
import CategoryItem from './components/CategoryItem'
import CategoryStyled from './style'

const CategoryList = ({ list = null }: { list: ICategory }) => {
  const { pathname, query, push, isReady } = useRouter()
  const isBlog = !query.id && pathname.includes('blog')

  const pathChecker = () => {
    if (!isReady) return
    if (!isBlog) {
      // blog 메인 페이지인 경우
      if (typeof query.id === 'string') {
        // 존재하지 않은 카테고리 명인 경우 블로그 홈으로 이동
        const isContain = cates.find((cate) => cate.title.toLowerCase() === query.id)
        if (!isContain) push('/blog')
      }
    }
  }

  useEffect(() => {
    pathChecker()
  }, [pathname, isReady])

  return (
    <CategoryStyled.Wrap>
      <CategoryStyled.List initial="hidden" animate="show" variants={verticalPostCatListMotion}>
        <CategoryItem categoryName="All" path="/blog" />
        {list?.map((item) => <CategoryItem key={item.id} categoryName={item.name} path={`/blog/category/${encodeURIComponent(item.name)}`} />)}
      </CategoryStyled.List>
    </CategoryStyled.Wrap>
  )
}

export default CategoryList
