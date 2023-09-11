import type { AppProps } from 'next/app'
import Layout from '@/layout'
import GlobalStyles from '@/theme/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  )
}
