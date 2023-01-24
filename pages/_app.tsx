import type { AppProps } from 'next/app'
import WithNProgress from '../src/hoc/withNProgress'
import Layout from '../src/layout'
import { GlobalStyle } from '../styles/globals'
import 'nprogress/nprogress.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <WithNProgress>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </WithNProgress>
  )
}

export default MyApp
