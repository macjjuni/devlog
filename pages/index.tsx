import { useEffect, useState } from 'react'
import styled from 'styled-components'
import type { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Pagination from '../notion/components/common/Pagination'
import { POSTS_PER_PAGE } from '../notion/config'
import { getCachedDatabaseItems } from '../notion/utils/getCachedDatabaseItems'
// import Category from '../notion/components/common/Category'
import CardList from '../notion/components/card/CardList'
import { CardData } from '../notion/types/types'
import { parseDatabaseItems } from '../notion/utils/parseDatabaseItems'

interface IHome {
  data: CardData[]
}
const IndexStyled = styled.section``

const Home = ({ data }: IHome) => {
  const { query } = useRouter()

  const currentPage = query.page ? parseInt(query.page.toString(), 10) : 1
  const [postData, setPostData] = useState(data.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage))

  useEffect(() => {
    setPostData(data.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage))
  }, [currentPage, data])

  return (
    <IndexStyled>
      {/* <Category /> */}
      <CardList data={postData} />
      <Pagination current={currentPage} total={data.length} />
    </IndexStyled>
  )
}

export const getStaticProps: GetStaticProps<IHome> = async () => {
  const databaseId = process.env.NOTION_DATABASEID
  if (!databaseId) throw new Error('DATABASE_ID is not defined')
  const databaseItems = await getCachedDatabaseItems(databaseId)
  const parsedData = parseDatabaseItems(databaseItems)

  return {
    props: { data: parsedData },
    revalidate: 60 * 5,
  }
}

export default Home
