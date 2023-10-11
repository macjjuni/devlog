import type { GetStaticProps, GetStaticPaths } from 'next'
import type { ExtendedRecordMap } from 'notion-types'
import notion, { getHeadDescription } from '@/lib/noiton'
import { getPageTitle } from 'notion-utils'
import NextHead from '@/components/seo/DefaultMeta'
import ProjectRender from '@/components/molecule/NotionRedner/ProjectRender'

interface IPost {
  recordMap: ExtendedRecordMap
  title: string
  des: string
}

export interface ICoverImg {
  url: string
  alt: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID

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
    if (!id || typeof id !== 'string') throw Error('ID is not defined')
    // Get recordMap of detail page
    const recordMap = await notion.getDetailPage(id)
    const title = recordMap ? getPageTitle(recordMap) : ''
    const des = recordMap ? getHeadDescription(recordMap) : ''

    return { props: { recordMap, title, des }, revalidate: 10 }
  } catch (err) {
    console.error(err)
    return { notFound: true }
  }
}

export default function ProjectDetail({ recordMap, title, des }: IPost) {
  return (
    <div className="project-detail flex flex-col items-center w-full">
      <NextHead title={title} des={des} />
      <ProjectRender recordMap={recordMap} />
    </div>
  )
}
