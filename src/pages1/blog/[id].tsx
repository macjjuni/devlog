import { useRouter } from 'next/router'
import type { GetStaticProps, GetStaticPaths } from 'next'
import type { ExtendedRecordMap } from 'notion-types'
import notion, { getHeadDescription } from '@/lib/noiton'
import { getPageTitle } from 'notion-utils'
import NotionRender from '@/component/molecule/NotionRedner'
// import NotionSkeleton from '@/components/load/NotionSkeleton'
import SkeletonBox from '@/component/atom/SkeletonBox'
import Comment from '@/component/molecule/Comment'
import NextHead from '@/component/seo/DefaultMeta'

interface IPost {
  recordMap: ExtendedRecordMap
  title: string
  des: string
  coverUrl: string
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
    const { coverUrl, alt } = notion.generateCoverUrl(recordMap) // 페이지 커버 이미지 주소

    return { props: { recordMap, title, des, coverUrl, alt }, revalidate: 10 }
  } catch (err) {
    console.error(err)
    return { notFound: true }
  }
}

export default function PageDetail({ recordMap, title, des, coverUrl, alt }: IPost) {
  const { isFallback } = useRouter()
  const coverImageUrl = coverUrl !== '' ? coverUrl : undefined

  if (isFallback)
    return (
      <div className="flex flex-col w-full gap-xxl max-w-layout">
        <SkeletonBox width="100%" height="300px" />
        <SkeletonBox width="100%" height="600px" />
      </div>
    )

  return (
    <div className="flex flex-col items-center w-full">
      <NextHead title={title} des={des} image={coverImageUrl} />
      <NotionRender recordMap={recordMap} coverUrl={coverUrl} alt={alt} />
      <Comment />
    </div>
  )
}
