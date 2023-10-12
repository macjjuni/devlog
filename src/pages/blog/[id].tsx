import { useRouter } from 'next/router'
import type { GetStaticProps, GetStaticPaths } from 'next'
import type { ExtendedRecordMap } from 'notion-types'
import notion, { getHeadDescription } from '@/lib/noiton'
import { getPageTitle } from 'notion-utils'
import NotionRender from '@/components/molecule/NotionRedner'
import NotionSkeleton from '@/components/load/NotionSkeleton'
import Comment from '@/components/molecule/Comment'
import NextHead from '@/components/seo/DefaultMeta'

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

    // page 타입인 블럭의 키값 찾기(리팩토링 필요)
    let pageKey = ''
    Object.keys(recordMap.block).forEach((key) => {
      if (recordMap.block[key].value.type === 'page') pageKey = key
    })
    const paegBlock = recordMap.block[pageKey].value
    const alt = paegBlock.properties.title[0][0] // 페이지 타이틀 이미지 alt 속성으로 사용
    const coverUrl = notion.generateCoverUrl(paegBlock) // 페이지 커버 이미지 주소

    return { props: { recordMap, title, des, coverUrl, alt }, revalidate: 10 }
  } catch (err) {
    console.error(err)
    return { notFound: true }
  }
}

const PageDetail = ({ recordMap, title, des, coverUrl, alt }: IPost) => {
  const { isFallback } = useRouter()

  if (isFallback) return <NotionSkeleton />

  return (
    <div className="flex flex-col items-center w-full">
      <NextHead title={title} des={des} image={coverUrl} />
      <NotionRender recordMap={recordMap} coverUrl={coverUrl} alt={alt} />
      <Comment />
    </div>
  )
}

export default PageDetail
