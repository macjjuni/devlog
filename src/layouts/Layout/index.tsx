import common from '@/styles/common'
import Load from '@/components/atom/Load'
import HeaderObserver from '@/components/atom/HeaderObserver'
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'

const defaultStyle = `flex justify-center items-center flex-col relative min-h-layout mx-auto ${common.textColor} ${common.bgColor} transition-colors`
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={defaultStyle}>
        <HeaderObserver />
        <Header />
        <Main>{children}</Main>
        <Footer />
      </div>
      {/* 로딩 모달 */}
      <Load />
    </>
  )
}

export default Layout
