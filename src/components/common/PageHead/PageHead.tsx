import Head from 'next/head'
import { useRouter } from 'next/router'

const DEFAULT_TITLE = process.env.NEXT_PUBLIC_TITLE || '꾸생의 Devlog'
const DEFAULT_SITE_URL = process.env.SITE_URL || 'https://kku.dev'
const DEFAULT_DESCRIPTION = process.env.DESCRIPTION || '프론트엔드, 백엔드 개발 지식을 기록하는 블로그입니다.'

interface IPageHead {
  subTitle?: string
  description?: string
}

const PageHead = ({ subTitle, description }: IPageHead) => {
  const { asPath } = useRouter()
  const fullTitle = `${subTitle ? `${subTitle} | ${DEFAULT_TITLE}` : DEFAULT_TITLE}`
  const fullUrl = DEFAULT_SITE_URL + asPath
  const fullDescription = description !== undefined ? description : DEFAULT_DESCRIPTION

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={fullUrl} />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content={DEFAULT_SITE_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={`${DEFAULT_SITE_URL}/image/cover.png`} />
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={DEFAULT_SITE_URL} />
      <meta property="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={`${DEFAULT_SITE_URL}/image/cover.png`} />
    </Head>
  )
}

export default PageHead
