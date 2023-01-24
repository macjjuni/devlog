// pages/_document.tsx
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta name="description" content="꾸생의 포트폴리오, kkusaeng, macjjuni" />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    )
  }
}
