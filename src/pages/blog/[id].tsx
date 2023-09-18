import type { GetStaticProps, GetStaticPaths } from 'next'
import type { ExtendedRecordMap } from 'notion-types'
import notion, { getHeadDescription } from '@/lib/noiton'
import { getPageTitle } from 'notion-utils'
import NotionRender from '@/components/molecule/NotionRedner'
import NextHead from '@/components/seo/DefaultMeta'

interface IPost {
  recordMap: ExtendedRecordMap
  title: string
  des: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID

  if (!databaseId) throw new Error('DATABASE_ID is not defined')

  // Get all Post
  const allPages = await notion.getAllPage(databaseId)
  // Generate all post paths
  const paths = allPages.map(({ id }) => ({ params: { id } }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps<IPost> = async ({ params }) => {
  const id = params?.id
  try {
    if (!id || typeof id !== 'string') throw Error('id is not defined')
    // Get recordMap of detail page
    const recordMap = await notion.getDetailPage(id)
    const title = recordMap ? getPageTitle(recordMap) : ''
    const des = recordMap ? getHeadDescription(recordMap) : ''

    return {
      props: { recordMap, title, des },
      revalidate: 10,
    }
  } catch (err) {
    console.error(err)
    return { notFound: true }
  }
}

const PageDetail = ({ recordMap, title, des }: IPost) => {
  return (
    <>
      <NextHead title={title} des={des} />
      <NotionRender recordMap={recordMap} />
    </>
  )
}

export default PageDetail
