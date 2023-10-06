import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useStore from '@/store'

import type { GetServerSideProps } from 'next'
import type { IBlogPage, IPage } from '@/@types/notion'

import config from '@/config/notion.config'
import notion from '@/lib/noiton'

import BlogLayout from '@/layouts/PageLayout/BlogLayout'
import NextHead from '@/components/seo/DefaultMeta'
import Profile from '@/components/widget/Profile'
import CategoryList from '@/components/widget/CategoryList'
import MarketPrice from '@/components/widget/MarketPrice'
import SocialLink from '@/components/widget/SocialLink'
import PageHeading from '@/components/molecule/PageHeading'
import PostList from '@/components/oraganisms/PostList'
import Pagination from '@/components/oraganisms/Pagination'

interface ISearch extends IBlogPage {
  searchPages: IPage[]
}

export const getServerSideProps: GetServerSideProps = async ({ res, params }) => {
  const keyword = params?.keyword
  if (!keyword || keyword === '') return { redirect: { destination: '/', permanent: false } }

  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=60')

  try {
    const databaseId = process.env.NOTION_BLOG_DATABASE_ID
    if (!databaseId) throw new Error('DATABASE_ID is not defined')
    if (typeof keyword !== 'string') throw new Error('Keyword Type Error!')

    const searchPages = await notion.getSelectPage(keyword)
    const pages = await notion.getAllPage(databaseId)
    const tempInfo = await notion.getNotionInfo(databaseId)
    const info = notion.getParseNotionInfo(tempInfo) // 데이터 가공

    return { props: { searchPages, pages, info } }
  } catch (e) {
    console.error(e)
    return {
      redirect: {
        destination: '/blog',
        permanent: false,
      },
    }
  }
}

const { POSTS_PER_PAGE } = config.post

const SearchPage = ({ searchPages, pages, info }: ISearch) => {
  const { query } = useRouter()
  const { keyword } = query
  const { setSearch } = useStore((state) => state)

  const currentPage = query.page ? parseInt(query.page.toString(), 10) : 1
  const [pageList, setPageList] = useState(searchPages.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage))

  useEffect(() => {
    setSearch(false) // 검색 중 모션 제거
    setPageList(searchPages.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage))
  }, [currentPage, searchPages])
  return (
    <>
      <NextHead title={`Blog > ${query.name}`} />
      <BlogLayout
        left={
          <>
            <Profile info={info} />
            <SocialLink />
            <CategoryList categories={info.category} pages={pages} />
            <MarketPrice />
          </>
        }
        right={
          <>
            <PageHeading title={`검색 키워드: ${keyword}`} count={searchPages.length} isSearch />
            <PostList list={pageList} />
            <Pagination current={currentPage} total={searchPages.length} />
          </>
        }
      />
    </>
  )
}

export default SearchPage
