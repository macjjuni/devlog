import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import type { GetStaticProps } from 'next'
import type { IPage, INotionInfo } from '@/types/notion'

import notion from '@/lib/noiton'
import config from '@/config/notion.config'

import ListPage from '@/layouts/Layout/ListPage'
import NextHead from '@/components/seo/DefaultMeta'
import PageHeading from '@/components/molecule/PageHeading'
import Profile from '@/components/molecule/Profile'
import MarketPrice from '@/components/molecule/MarketPrice'
import CategoryList from '@/components/oraganisms/CategoryList'
import PostList from '@/components/oraganisms/PostList'
import Pagination from '@/components/oraganisms/Pagination'

interface IBlogPage {
  info: INotionInfo
  pages: IPage[]
}

export const getStaticProps: GetStaticProps<IBlogPage> = async () => {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID

  try {
    if (!databaseId) throw new Error('DATABASE_ID is undefined.')
    const info = await notion.getNotionInfo(databaseId)
    const pages = await notion.getAllPage(databaseId)

    return {
      props: { info, pages },
      revalidate: 10,
    }
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}

const { POSTS_PER_PAGE } = config.post

const BlogPage = ({ info, pages }: IBlogPage) => {
  const { query } = useRouter()
  const currentPage = query.page ? parseInt(query.page.toString(), 10) : 1
  const [pageList, setPageList] = useState(pages.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage))

  useEffect(() => {
    setPageList(pages.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage))
  }, [currentPage, pages])

  return (
    <>
      <NextHead title="Blog" />
      <ListPage
        left={
          <>
            <Profile info={info} />
            <CategoryList categories={info.category} pages={pages} />
            <MarketPrice />
          </>
        }
        right={
          <>
            <PageHeading title={query?.name} count={pages.length} />
            <PostList list={pageList} />
            <Pagination current={currentPage} total={pages.length} />
          </>
        }
      />
    </>
  )
}

export default BlogPage
