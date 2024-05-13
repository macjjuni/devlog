import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Layout from '@/layouts/Layout'
import WithProgressBar from '@/component/hoc/ProgressBar'
import DefaultMeta from '@/component/seo/DefaultMeta'
import Initialize from '@/component/initialize'

import '@/style/globals.css'
import '@/style/notion.styles.css'
import '@/style/prism.css'

import '@fontsource/noto-sans-kr' // Defaults to weight 400
import '@fontsource/noto-sans-kr/400.css' // Specify weight

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <DefaultMeta />
      <Initialize />
      <WithProgressBar>
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </WithProgressBar>
    </>
  )
}
