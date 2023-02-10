import { ReactNode } from 'react'
import { LayoutStyled } from './Layout.style'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

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
