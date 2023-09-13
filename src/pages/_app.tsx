import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import Layout from '@/layouts/Layout'
import theme from '@/styles/theme'
import GlobalStyles from '@/styles/global'
import WithProgressBar from '@/components/hoc/ProgressBar'
import useStore from '@/store'

export default function App({ Component, pageProps }: AppProps) {
  const { color } = useStore((state) => state)

  return (
    <ThemeProvider theme={theme(color)}>
      <WithProgressBar>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WithProgressBar>
    </ThemeProvider>
  )
}
