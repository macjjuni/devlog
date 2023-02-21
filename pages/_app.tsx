import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import { ThemeProvider } from 'styled-components'
import InitialColorMode from 'components/common/InitialColorMode'
import GoogleAnalystics from 'components/common/GoogleAnalytics'
import WithNProgress from 'hoc/withNProgress'
import { theme } from 'styles/theme'
import Layout from 'layout'

import 'styles/reset.css'
import 'styles/notion/index.scss'
import 'prismjs/themes/prism-tomorrow.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      {/* HTML title, meta 태그 컴포넌트 */}
      <ThemeProvider theme={theme}>
        {/* OS에 설정된 컬러모드 초기화 */}
        <InitialColorMode />
        {/* 구글 애널리틱스 */}
        <GoogleAnalystics />
        <WithNProgress>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </WithNProgress>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
