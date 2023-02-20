import Head from 'next/head'
import { useRouter } from 'next/router'

const DEFAULT_TITLE = 'Notion Devlog'
const DEFAULT_DESCRIPTION = 'Next.js와 TypeScript로 만드는 NotionAPI 블로그'
const DEFAULT_IMAGE_SRC = '/image/cover.png'

interface IPageHead {
  title?: string
  description?: string
}

const PageHead = ({ title, description }: IPageHead) => {
  const { asPath } = useRouter()

  const siteUrl = process.env.SITE_URL ?? 'https://kku.dev/'

  const fullUrl = `${siteUrl}${asPath}`
  const fullTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description ?? DEFAULT_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={fullUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title ?? DEFAULT_TITLE} />
        <meta property="og:description" content={description ?? DEFAULT_DESCRIPTION} />
        <meta property="og:site_name" content={title ?? DEFAULT_TITLE} />
        <meta property="og:image" content={DEFAULT_IMAGE_SRC} />
        <meta property="og:image:alt" content={title ?? DEFAULT_TITLE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={fullUrl} />
      </Head>
    </>
  )
}

export default PageHead
