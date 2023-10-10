import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import type { GetStaticPaths, GetStaticProps } from 'next'
import type { IPage, IBlogPage } from '@/@types/notion'

import notion from '@/lib/noiton'
import config from '@/config/notion.config'

import BlogLayout from '@/layouts/PageLayout/BlogLayout'
import NextHead from '@/components/seo/DefaultMeta'
import Widget from '@/components/widget'
import PageHeading from '@/components/molecule/PageHeading'
import PostList from '@/components/oraganisms/PostList'
import Pagination from '@/components/oraganisms/Pagination'

// 카테고리에 맞는 페이지 필터링
const pageFilter = (pages: IPage[], categoryName: string) => {
  return pages.filter((page) => page.category?.name.toLowerCase().includes(categoryName.toLowerCase()))
}

export const getStaticPaths: GetStaticPaths = async () => {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID
  try {
    if (!databaseId) throw new Error('DATABASE_ID is undefined.')
    const tempInfo = await notion.getNotionInfo(databaseId)
    const { category } = notion.getParseNotionInfo(tempInfo) // 데이터 가공

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

  try {
    const databaseId = process.env.NOTION_BLOG_DATABASE_ID
    if (!databaseId) throw new Error('DATABASE_ID is not defined')

    const pages = await notion.getAllPage(databaseId)

    const tempInfo = await notion.getNotionInfo(databaseId)
    const info = notion.getParseNotionInfo(tempInfo) // 데이터 가공

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

const { POSTS_PER_PAGE } = config.post

export default function CategoryPage({ pages, info }: IBlogPage) {
  const { query } = useRouter()
  const categoryName = query.name as string
  // 카테고리 페이지에서는 pages를 필터링한 filteredPages를 사용해야 함.
  const filteredPages = pageFilter(pages, categoryName)

  const currentPage = query.page ? parseInt(query.page.toString(), 10) : 1
  const [pageList, setPageList] = useState(filteredPages.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage))

  useEffect(() => {
    setPageList(filteredPages.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage))
  }, [currentPage, pages])

  return (
    <>
      <NextHead title={`Blog > ${query.name}`} />

      <BlogLayout
        left={<Widget info={info} categories={info.category} pages={pages} />}
        right={
          <>
            <PageHeading title={query?.name} count={filteredPages.length} isSearch />
            <PostList list={pageList} />
            <Pagination current={currentPage} total={filteredPages.length} />
          </>
        }
      />
    </>
  )
}
