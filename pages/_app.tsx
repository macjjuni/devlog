import { useEffect, useLayoutEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Layout from '../src/layout'
import WithNProgress from '../src/hoc/withNProgress'
import { GlobalStyle } from '../src/styles/globals'
import { theme } from '../src/styles/theme'
import { initColorMode } from '../src/utils/colorMode'
import Titles from '../src/components/Title'
import 'nprogress/nprogress.css'
import '../src/styles/font.css'

const useMultiEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

const MyApp = ({ Component, pageProps }: AppProps) => {
  useMultiEffect(() => {
    initColorMode()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Titles />
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
