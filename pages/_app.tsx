import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from 'redux/store'
import { ThemeProvider } from 'styled-components'
import InitialColorMode from 'components/common/InitialColorMode'
import GlobalStyle from 'components/common/GlobalStyle'
import GoogleAnalystics from 'components/common/GoogleAnalytics'
import WithNProgress from 'hoc/withNProgress'
import { theme } from 'styles/theme'
import Layout from 'layout'
import Heads from 'components/common/Heads'

import 'styles/reset.css'
import 'styles/font.css'
import 'nprogress/nprogress.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      {/* HTML title, meta 태그 컴포넌트 */}
      <Heads />
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          {/* OS에 설정된 컬러모드 초기화 */}
          <InitialColorMode />
          {/* 전역 스타일 */}
          <GlobalStyle />

          {/* 구글 애널리틱스 */}
          <GoogleAnalystics />
          <WithNProgress>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </WithNProgress>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
