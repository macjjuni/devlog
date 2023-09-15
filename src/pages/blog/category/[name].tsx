import type { GetStaticPaths, GetStaticProps } from 'next'
import type { IPage } from '@/types/notion'

import notion from '@/lib/noiton'
import { INotionInfo } from '@/types/notion'

import { useRouter } from 'next/router'
import PostList from '@/components/oraganisms/PostList'
import CategoryList from '@/components/oraganisms/CategoryList'
import NextHead from '@/components/seo/DefaultMeta'
import PageStyled from '@/styles/common'

// import { checkKorean } from '@/utils/string'

interface IBlogPage {
  info: INotionInfo
  pages: IPage[]
}

export const getStaticPaths: GetStaticPaths = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID
  try {
    if (!databaseId) throw new Error('DATABASE_ID is undefined.')
    const { category } = await notion.getNotionInfo(databaseId)

    const paths = category?.map(({ name }) => ({ params: { name } }))

    if (!paths || paths.length === 0) throw new Error('No Categories')

    return { paths, fallback: false }
  } catch (e) {
    console.error(e)
    return { paths: [], fallback: false }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryId = params?.name?.toString()
  if (!queryId || queryId === '') return { redirect: { destination: '/', permanent: false } }

  // const isKorean = checkKorean(queryId)
  // const name = isKorean ? queryId : queryId.replace(/\b[a-z]/g, (char) => char.toUpperCase())

  try {
    const databaseId = process.env.NOTION_DATABASE_ID
    if (!databaseId) throw new Error('DATABASE_ID is not defined')

    const pages = await notion.getAllPage(databaseId, { categoryName: queryId })
    const info = await notion.getNotionInfo(databaseId)

    const cateArr = info.category?.map((cate) => cate.name) || []
    const currentName = cateArr.find((cate) => cate === queryId)

    // 존재하지 않은 카테고리 접근 시 404 페이지로 이동
    if (currentName === undefined) {
      return {
        redirect: {
          destination: '/404',
          permanent: false,
        },
      }
    }
    return {
      props: { pages, info },
      revalidate: 60,
    }
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}

const CategoryPage = ({ pages, info }: IBlogPage) => {
  const { query } = useRouter()

  return (
    <>
      <NextHead title={`Blog > ${query.name}`} />
      <PageStyled.Wrap>
        <PageStyled.Left>
          <CategoryList list={info.category} />
        </PageStyled.Left>
        <PageStyled.Right>
          <PostList list={pages} />
        </PageStyled.Right>
      </PageStyled.Wrap>
    </>
  )
}

export default CategoryPage
