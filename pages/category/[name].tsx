import { useEffect, useState } from 'react'
import styled from 'styled-components'
import type { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import PageHead from 'components/common/PageHead'
import Banner from 'components/views/Banner'
import Category from 'components/views/Category'
import PostList from 'components/views/PostList.tsx/PostList'
import Pagination from 'components/views/Pagination'
import { POSTS_PER_PAGE } from 'notion/config'
import { getCachedDatabaseItems } from 'notion/utils/getCachedDatabaseItems'

import type { ICard, IBlogData } from 'notion/types/types'
import { parseDatabaseItems } from 'notion/utils/parseDatabaseItems'
import { initBlogInfo } from 'notion/notion'
import { checkKorean } from 'notion/utils/checkKorean'

interface ICateory {
  data: ICard[]
  blogData: IBlogData
}
const IndexStyled = styled.section``

const CategoryPage = ({ data, blogData }: ICateory) => {
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

export const getStaticProps: GetStaticProps<ICateory> = async ({ params }) => {
  const queryName = params?.name?.toString()
  if (!queryName || queryName === '') return { redirect: { destination: '/', permanent: false } }

  const isKorean = checkKorean(queryName)
  const name = isKorean ? queryName : queryName.replace(/\b[a-z]/g, (char) => char.toUpperCase())

  try {
    const databaseId = process.env.NOTION_DATABASEID
    if (!databaseId) throw new Error('DATABASE_ID is not defined')
    const databaseItems = await getCachedDatabaseItems(databaseId, { categoryName: name })

    const parsedData = parseDatabaseItems(databaseItems)
    const blogData = await initBlogInfo(databaseId)

    return {
      props: {
        data: parsedData,
        blogData,
      },
      revalidate: 60 * 5,
    }
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const databaseId = process.env.NOTION_DATABASEID
  if (!databaseId) throw new Error('DATABASE_ID is not defined')
  const { category } = await initBlogInfo(databaseId)

  const paths = category?.options.map(({ name: cateName }) => ({
    params: { name: cateName },
  }))

  if (!paths || paths.length === 0) throw new Error('No Categories')

  return {
    paths,
    // 등록된 카테고리 외에 없을경우 404 예외처리
    fallback: false,
  }
}

export default CategoryPage
