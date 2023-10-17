import { Html, Head, Main, NextScript } from 'next/document'
import Favicon from '@/components/seo/Favicon'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <Favicon />
        <script>const theme = window.localStorage.getItem(`theme`); if (theme === `dark`) document.documentElement.classList.add(`dark`)</script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
