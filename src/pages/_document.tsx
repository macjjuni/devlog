import { Html, Head, Main, NextScript } from 'next/document'
import Favicon from '@/components/seo/Favicon'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <Favicon />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
