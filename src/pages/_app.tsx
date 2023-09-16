import type { AppProps } from 'next/app'
import Layout from '@/layouts/Layout'
import WithProgressBar from '@/components/hoc/ProgressBar'
import ThemeProvider from '@/components/hoc/ThemeProvider'
import DefaultMeta from '@/components/seo/DefaultMeta'
import '@/styles/index.css'
import '@/styles/notion.styles.css'
import '@/styles/prism.css'

import '@fontsource/noto-sans-kr' // Defaults to weight 400
import '@fontsource/noto-sans-kr/400.css' // Specify weight

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultMeta />
      <WithProgressBar>
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </WithProgressBar>
    </>
  )
}
