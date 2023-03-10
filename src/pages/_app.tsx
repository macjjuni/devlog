import 'katex/dist/katex.min.css'
import '@/styles/notionStyle.scss'
import '@/styles/notion.default.css'
import '@/styles/prism.css'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import GAScript from '@/components/common/GAScript'
import WithNProgress from '@/hoc/NProgress'
import Layout from '@/layout'
import InitialTheme from '@/components/common/InitialTheme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Provider store={store}>
        {/* 구글 애널리틱스 */}
        <GAScript />
        {/* 컬러모드 초기화 */}
        <InitialTheme />
        <WithNProgress>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </WithNProgress>
      </Provider>
    </>
  )
}

export default App
