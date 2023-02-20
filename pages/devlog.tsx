import { useEffect, useState } from 'react'
import styled from 'styled-components'
import type { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import PageHead from 'components/common/PageHead'
import BlogBanner from 'components/views/BlogBanner'
import BlogCategory from 'components/views/BlogCategory'
import BlogCardItems from 'components/views/BlogCardItems'
import BlogPagination from 'components/views/BlogPagination'
import { POSTS_PER_PAGE } from '../src/notion/config'
import { getCachedDatabaseItems } from '../src/notion/utils/getCachedDatabaseItems'

import type { ICard, IBlogData } from '../src/notion/types/types'
import { parseDatabaseItems } from '../src/notion/utils/parseDatabaseItems'
import { initBlogInfo } from '../src/notion/notion'

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
        <BlogBanner data={blogData} />
        <BlogCategory postCount={postCount} category={blogData.category?.options} />
        <BlogCardItems data={postData} />
        <BlogPagination current={currentPage} total={data.length} />
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
