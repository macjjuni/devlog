import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { GlobalStyles } from 'styles/globals'
import GoogleAnalystics from 'components/common/GoogleAnalytics'

import WithNProgress from 'hoc/withNProgress'
import Layout from 'layout'

import 'styles/reset.css'
import 'styles/notion/index.scss'
import 'styles/notion/notion.style.scss'
import 'prismjs/themes/prism-tomorrow.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* 구글 애널리틱스 */}
        <GoogleAnalystics />
        <WithNProgress>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </WithNProgress>
      </ThemeProvider>
    </>
  )
}

export default MyApp
