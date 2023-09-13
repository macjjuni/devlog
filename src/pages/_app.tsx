import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import Layout from '@/layouts/Layout'
import theme from '@/styles/theme'
import GlobalStyles from '@/styles/global'
import WithProgressBar from '@/components/hoc/ProgressBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <WithProgressBar>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WithProgressBar>
    </ThemeProvider>
  )
}
