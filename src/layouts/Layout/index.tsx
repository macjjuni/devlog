import common from '@/styles/common'
import Load from '@/components/atom/Load'
import HeaderObserver from '@/components/atom/HeaderObserver'
// import SpeedDial from '@/components/oraganisms/SpeedDial'
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const defaultStyle = `flex justify-center items-center flex-col relative min-h-layout mx-auto overflow-hidden sm:overflow-visible ${common.textColor} ${common.bgColor} transition-colors`
  return (
    <>
      <div className={defaultStyle}>
        <HeaderObserver />
        <Header />
        <Main>{children}</Main>
        <Footer />
        {/* <SpeedDial /> */}
      </div>
      {/* 로딩 모달 */}
      <Load />
    </>
  )
}

export default Layout
