import { ReactNode } from 'react'
import * as L from './Layout.style'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <L.Layout>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </L.Layout>
  )
}

export default Layout
