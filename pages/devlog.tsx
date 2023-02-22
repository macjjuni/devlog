import { useEffect, useState } from 'react'
import type { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import PageHead from 'components/common/PageHead'
import Banner from 'components/views/Banner'
import Category from 'components/views/Category'
import PostList from 'components/views/PostList.tsx/PostList'
import Pagination from 'components/views/Pagination'
import { POSTS_PER_PAGE } from 'notion/config'
import { getCachedDatabaseItems } from 'notion/utils/getCachedDatabaseItems'
import { parseDatabaseItems } from 'notion/utils/parseDatabaseItems'
import { initBlogInfo } from 'notion/notion'
import type { ICard, IBlogData } from 'notion/types/types'

interface IBlog {
  data: ICard[]
  blogData: IBlogData
}
const IndexStyled = styled.section``

const Blog = ({ data, blogData }: IBlog) => {
  const { query } = useRouter()
  const currentPage = query.page ? parseInt(query.page.toString(), 10) : 1
  const [postData, setPostData] = useState(data.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage))
  const [postCount] = useState(data.length)

  useEffect(() => {
    setPostData(data.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage))
  }, [currentPage, data])

  return (
    <>
      <PageHead subTitle="DevLog" />
      <IndexStyled>
        <Banner data={blogData} />
        <Category postCount={postCount} category={blogData.category?.options} />
        <PostList data={postData} />
        <Pagination current={currentPage} total={data.length} />
      </IndexStyled>
    </>
  )
}

export const getStaticProps: GetStaticProps<IBlog> = async () => {
  const databaseId = process.env.NOTION_DATABASEID
  if (!databaseId) throw new Error('DATABASE_ID is not defined')
  const databaseItems = await getCachedDatabaseItems(databaseId)

  const parsedData = parseDatabaseItems(databaseItems)
  const blogData = await initBlogInfo(databaseId)

  return {
    props: {
      data: parsedData,
      blogData,
    },
    revalidate: 60 * 5,
  }
}

export default Blog
