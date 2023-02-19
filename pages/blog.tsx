import { useEffect, useState } from 'react'
import styled from 'styled-components'
import type { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Pagination from '../notion/components/common/Pagination'
import { POSTS_PER_PAGE } from '../notion/config'
import { getCachedDatabaseItems } from '../notion/utils/getCachedDatabaseItems'
import Banner from '../notion/components/banner/Banner'
// import Category from '../notion/components/common/Category'
import CardList from '../notion/components/card/CardList'
import type { ICard, IBlogData } from '../notion/types/types'
import { parseDatabaseItems } from '../notion/utils/parseDatabaseItems'
import { initGetInfo } from '../notion/notion'

interface IBlog {
  data: ICard[]
  blogData: IBlogData
}
const IndexStyled = styled.section``

const Blog = ({ data, blogData }: IBlog) => {
  const { query } = useRouter()
  const currentPage = query.page ? parseInt(query.page.toString(), 10) : 1
  const [postData, setPostData] = useState(data.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage))

  useEffect(() => {
    setPostData(data.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage))
  }, [currentPage, data])

  return (
    <IndexStyled>
      <Banner data={blogData} />
      {/* <Category /> */}
      <CardList data={postData} />
      <Pagination current={currentPage} total={data.length} />
    </IndexStyled>
  )
}

export const getStaticProps: GetStaticProps<IBlog> = async () => {
  const databaseId = process.env.NOTION_DATABASEID
  if (!databaseId) throw new Error('DATABASE_ID is not defined')
  const databaseItems = await getCachedDatabaseItems(databaseId)
  const parsedData = parseDatabaseItems(databaseItems)
  const blogData = await initGetInfo(databaseId)

  return {
    props: {
      data: parsedData,
      blogData,
    },
    revalidate: 60 * 5,
  }
}

export default Blog
