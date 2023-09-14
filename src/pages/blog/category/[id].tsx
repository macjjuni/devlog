import PostList from '@/components/oraganisms/PostList'
import CategoryList from '@/components/oraganisms/CategoryList'
import { cates } from '@/route'
import { type IPost } from '@/types/notion'
import NextHead from '@/components/seo/DefaultMeta'
import PageStyled from '@/styles/common'

const posts: IPost[] = [
  { id: '1', title: '1This is Title! Just Do it! Hello World Next.js 13 ABCDEFGHIJKLMN', category: 'Dev', date: '2023.09.20' },
  { id: '2', title: '1This is Title! Just Do it! Hello World Next.js 13 ABCDEFGHIJKLMN', category: 'TypeScript', date: '2023.09.23' },
  { id: '3', title: '1This is Title! Just Do it! Hello World Next.js 13 ABCDEFGHIJKLMN', category: 'Daily', date: '2023.09.23' },
  { id: '4', title: '1This is Title! Just Do it! Hello World Next.js 13 ABCDEFGHIJKLMN', category: 'Bitcoin', date: '2023.09.23' },
  { id: '5', title: '1This is Title! Just Do it! Hello World Next.js 13 ABCDEFGHIJKLMN', category: 'Dev', date: '2023.09.23' },
]

const CategoryPage = ({ category = 'Dev' }) => {
  return (
    <>
      <NextHead title={`Blog > ${category}`} />
      <PageStyled.Wrap>
        <PageStyled.Left>
          <CategoryList list={cates} />
        </PageStyled.Left>
        <PageStyled.Right>
          <PostList list={posts} />
        </PageStyled.Right>
      </PageStyled.Wrap>
    </>
  )
}

export default CategoryPage
