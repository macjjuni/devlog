import { useEffect, useState } from 'react'
import styled from 'styled-components'
import type { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Pagination from '../notion/components/common/Pagination'
import { POSTS_PER_PAGE } from '../notion/const/const'
import { getCachedDatabaseItems } from '../notion/utils/getCachedDatabaseItems'
import CardList from '../notion/components/card/CardList'
import { CardData } from '../notion/types/types'
import { parseDatabaseItems } from '../notion/utils/parseDatabaseItems'

interface HomeProps {
  data: CardData[]
}
const IndexStyled = styled.section``

const Home = ({ data }: HomeProps) => {
  console.log(data)
  const { query } = useRouter()
  const currentPage = query.page ? parseInt(query.page.toString(), 10) : 1

  const [postData, setPostData] = useState(data.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage))

  useEffect(() => {
    setPostData(data.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage))
  }, [currentPage, data])

  return (
    <IndexStyled>
      <section className="m-4 min-h-[50vh] max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-8 px-4">
        <aside className="basis-[15%]">
          <div className="p-4 rounded-xl shadow-md border">
            <h2 className="text-2xl font-bold mb-4">Tags</h2>
          </div>
        </aside>
        <div className="flex-grow">
          <h3 className="font-bold text-4xl mb-4">Devlog</h3>
          <CardList data={postData} />
          <div className="my-4 flex justify-center">
            <Pagination current={currentPage} total={data.length} />
          </div>
        </div>
      </section>
    </IndexStyled>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const databaseId = process.env.NOTION_DATABASEID
  if (!databaseId) throw new Error('DATABASE_ID is not defined')
  const databaseItems = await getCachedDatabaseItems(databaseId)
  const parsedData = parseDatabaseItems(databaseItems)
  // 태그 불러와야함!
  // const allTags = getAllTags(parsedData)

  return {
    props: { data: parsedData },
    revalidate: 60,
  }
}

export default Home
