import Head from 'next/head'

interface IDescription {
  content: string
}

interface IHead {
  title?: string
  des?: IDescription
}

const defaultTitle = process.env.NEXT_PUBLIC_TITLE || 'not title in env'
const defaultDes = process.env.NEXT_PUBLIC_DESCRIPTION || 'not description in env'
const defaultURL = process.env.NEXT_PUBLIC_DOMAIN || 'https://kku.dev/'

const NextHead = ({ title, des }: IHead) => {
  const Title = `${defaultTitle}${title ? ` - ${title}` : ''}`

  return (
    <Head>
      <title>{Title}</title>
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content={des?.content || defaultDes} />
      {/* Open Graph Tags */}
      {/* 웹사이트 이름 */}
      <meta name="og:site_name" content={defaultTitle} />
      {/* 웹사이트 주소 */}
      <meta name="og:url" content={defaultURL} />
      {/* 웹사이트 제목 */}
      <meta name="og:title" content={Title} />
      {/* 웹사이트 상세 설명 */}
      <meta name="og:description" content={des?.content || defaultDes} />
      {/* 웹사이트 유형 */}
      <meta name="og:type" content="website" />
      {/* 웹사이트 이미지 */}
      <meta name="og:image" content="/" />
    </Head>
  )
}

export default NextHead
