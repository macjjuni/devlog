import { useEffect, useState } from 'react'
import styled from 'styled-components'
import type { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import PageHead from 'components/common/PageHead'
import BlogBanner from 'components/views/BlogBanner'
import BlogCategory from 'components/views/BlogCategory'
import BlogCardItems from 'components/views/BlogCardItems'
import BlogPagination from 'components/views/BlogPagination'
import { POSTS_PER_PAGE } from 'notion/config'
import { getCachedDatabaseItems } from 'notion/utils/getCachedDatabaseItems'

import type { ICard, IBlogData } from 'notion/types/types'
import { parseDatabaseItems } from 'notion/utils/parseDatabaseItems'
import { initBlogInfo } from 'notion/notion'

interface ICateory {
  data: ICard[]
  blogData: IBlogData
}
const IndexStyled = styled.section``

const CategoryPage = ({ data, blogData }: ICateory) => {
  console.log(data)

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

export const getStaticProps: GetStaticProps<ICateory> = async ({ params }) => {
  const id = params?.id
  if (!id) return { redirect: { destination: '/', permanent: false } }

  try {
    if (typeof id !== 'string') throw Error('params wrong!')
    const databaseId = process.env.NOTION_DATABASEID
    if (!databaseId) throw new Error('DATABASE_ID is not defined')
    const databaseItems = await getCachedDatabaseItems(databaseId, { categoryName: id })

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

  const databaseItems = await getCachedDatabaseItems(databaseId)
  const paths = databaseItems.map(({ id }) => ({
    params: { id },
  }))

  return {
    paths,
    fallback: true,
  }
}

export default CategoryPage
