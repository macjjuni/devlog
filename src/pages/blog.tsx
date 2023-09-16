import { type GetStaticProps } from 'next'
import { type IPage } from '@/types/notion'

import notion from '@/lib/noiton'
import { INotionInfo } from '@/types/notion'

import PostList from '@/components/oraganisms/PostList'
import CategoryList from '@/components/oraganisms/CategoryList'
import NextHead from '@/components/seo/DefaultMeta'
import { PageStyled } from '@/styles/common'

interface IBlogPage {
  info: INotionInfo
  pages: IPage[]
}

export const getStaticProps: GetStaticProps<IBlogPage> = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID
  try {
    if (!databaseId) throw new Error('DATABASE_ID is undefined.')

    const info = await notion.getNotionInfo(databaseId)
    const pages = await notion.getAllPage(databaseId)

    return {
      props: { info, pages },
      revalidate: 60,
    }
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}

const BlogPage = ({ pages, info }: IBlogPage) => {
  return (
    <>
      <NextHead title="Blog" />
      <PageStyled.Wrap>
        <PageStyled.Left>
          <CategoryList list={info.category} />
        </PageStyled.Left>
        <PageStyled.Right>
          <PostList list={pages} />
        </PageStyled.Right>
      </PageStyled.Wrap>
    </>
  )
}

export default BlogPage
