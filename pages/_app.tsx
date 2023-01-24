import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Layout from '../src/layout'
import WithNProgress from '../src/hoc/withNProgress'
import { GlobalStyle } from '../src/styles/globals'
import { theme } from '../src/styles/theme'
import 'nprogress/nprogress.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WithNProgress>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WithNProgress>
    </ThemeProvider>
  )
}

export default MyApp
