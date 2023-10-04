import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import type { GetStaticProps, GetStaticPaths } from 'next'
import type { ExtendedRecordMap } from 'notion-types'
import notion, { getHeadDescription } from '@/lib/noiton'
import { getPageTitle } from 'notion-utils'
import NotionRender from '@/components/molecule/NotionRedner'
import NotionSkeleton from '@/components/load/NotionSkeleton'
import NextHead from '@/components/seo/DefaultMeta'
import getPageCoverImage from '@/api/notion/coverImage'

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
  const { query, isFallback } = useRouter()
  const [coverImg, setCoverImg] = useState<ICoverImg>({ url: '', alt: '' })

  const getPageCover = useCallback(async () => {
    if (typeof query.id !== 'string') return
    const { coverUrl, alt } = await getPageCoverImage(query.id)
    setCoverImg({ url: coverUrl, alt })
  }, [])

  useEffect(() => {
    getPageCover()
  }, [])

  if (isFallback) return <NotionSkeleton />

  return (
    <>
      <NextHead title={title} des={des} />
      <NotionRender recordMap={recordMap} coverImg={coverImg} />
    </>
  )
}

export default PageDetail
