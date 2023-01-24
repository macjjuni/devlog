import { ReactNode } from 'react'
import { LayoutStyled } from './style'
import Header from './header'
import Main from './main'
import Footer from './footer'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <LayoutStyled>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutStyled>
  )
}

export default Layout
