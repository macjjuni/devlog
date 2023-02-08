import { useEffect, useLayoutEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import WithGAnalystics from '../src/hoc/withGAnalystics'
import WithNProgress from '../src/hoc/withNProgress'
import { GlobalStyle } from '../src/styles/globals'
import { theme } from '../src/styles/theme'
import colorMode from '../src/utils/colorMode'
import Layout from '../src/layout'
import Titles from '../src/components/title'
import 'nprogress/nprogress.css'
import '../src/styles/font.css'

const useMultiEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

const MyApp = ({ Component, pageProps }: AppProps) => {
  useMultiEffect(() => {
    colorMode.initColorMode()
  }, [])

  return (
    <WithGAnalystics>
      <ThemeProvider theme={theme}>
        <Titles />
        <GlobalStyle />
        <WithNProgress>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </WithNProgress>
      </ThemeProvider>
    </WithGAnalystics>
  )
}

export default MyApp
