import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import WithColorMode from '../src/hoc/withColorMode'
import WithGAnalystics from '../src/hoc/withGAnalystics'
import WithNProgress from '../src/hoc/withNProgress'
import { GlobalStyle } from '../src/styles/globals'
import { theme } from '../src/styles/theme'
import Layout from '../src/layout'
import Titles from '../src/components/title'
import 'nprogress/nprogress.css'
import '../src/styles/font.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <WithGAnalystics>
      <WithColorMode>
        <ThemeProvider theme={theme}>
          <Titles />
          <GlobalStyle />
          <WithNProgress>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </WithNProgress>
        </ThemeProvider>
      </WithColorMode>
    </WithGAnalystics>
  )
}

export default MyApp
