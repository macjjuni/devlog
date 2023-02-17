import type { GetStaticPaths, GetStaticProps } from 'next'
import type { ExtendedRecordMap } from 'notion-types'
import { useRouter } from 'next/router'

// import Giscus from '@giscus/react'
import NotionPageRenderer from '../../notion/components/notion/NotionPageRenderer'

import { getCachedDatabaseItems } from '../../notion/utils/getCachedDatabaseItems'
import { getPageContent } from '../../notion/notion'

interface BlogDetailsPageProps {
  recordMap: ExtendedRecordMap
}

const BlogDetailsPage = ({ recordMap }: BlogDetailsPageProps) => {
  const { isFallback } = useRouter()

  if (isFallback) return <>Loading...</>

  return (
    <>
      <NotionPageRenderer recordMap={recordMap} />
      {/* <div className="max-w-4xl mx-auto my-8">
        <Giscus
          id="comments"
          term="blog"
          repo="macjjuni/portfolio"
          repoId="R_kgDOITdSEg"
          category="General"
          categoryId="DIC_kwDOITdSEs4CS0Sk"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="light"
          lang="ko"
        />
      </div> */}
    </>
  )
}

export const getStaticProps: GetStaticProps<BlogDetailsPageProps> = async ({ params }) => {
  const pageId = params?.pageId
  try {
    const recordMap = await getPageContent(pageId.toString())
    return {
      props: { recordMap: { ...recordMap } },
      revalidate: 60,
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
  const paths = databaseItems.map(({ id: pageId }) => ({
    params: { pageId },
  }))

  return {
    paths,
    fallback: true,
  }
}

export default BlogDetailsPage
