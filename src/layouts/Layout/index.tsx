import LayoutsTyled from './style'
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutsTyled>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutsTyled>
  )
}

export default Layout
