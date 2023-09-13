import styled from '@emotion/styled'
import PostList from '@/components/oraganisms/PostList'
import CategoryList from '@/components/oraganisms/CategoryList'
import { type IPost } from '@/types/notion'
import { cates } from '@/route'

const posts: IPost[] = [
  { id: '1', title: '1This is Title! Just Do it! Hello World Next.js 13 ABCDEFGHIJKLMN', category: 'Dev', date: '2023.09.20' },
  { id: '2', title: '1This is Title! Just Do it! Hello World Next.js 13 ABCDEFGHIJKLMN', category: 'TypeScript', date: '2023.09.23' },
  { id: '3', title: '1This is Title! Just Do it! Hello World Next.js 13 ABCDEFGHIJKLMN', category: 'Daily', date: '2023.09.23' },
  { id: '4', title: '1This is Title! Just Do it! Hello World Next.js 13 ABCDEFGHIJKLMN', category: 'Bitcoin', date: '2023.09.23' },
  { id: '5', title: '1This is Title! Just Do it! Hello World Next.js 13 ABCDEFGHIJKLMN', category: 'Dev', date: '2023.09.23' },
]

const BlogStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  // 메인 데스크탑 최소 높이
  min-height: calc(
    ${({ theme }) => theme.size.main} - (${({ theme }) => theme.size.header} + ${({ theme }) => theme.size.footer} + ${({ theme }) => theme.size.max})
  );

  ${({ theme }) =>
    theme.response.tablet(`
      min-height: calc(${theme.size.main} - (${theme.size.header} + ${theme.size.footer} + ${theme.size.lg} + ${theme.size.lg} + ${theme.size.lg}));
    `)}

  & > .left-wrap {
    width: 30%;
  }
  & > .right-wrap {
    width: 70%;
  }
`
const BlogPage = () => {
  return (
    <BlogStyled>
      <div className="left-wrap">
        <CategoryList list={cates} />
      </div>
      <div className="right-wrap">
        <PostList list={posts} />
      </div>
    </BlogStyled>
  )
}

export default BlogPage
