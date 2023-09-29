// import { motion, AnimatePresence } from 'framer-motion'
// import ThemeButton from '@/components/molecule/ThemeButton'
import useStore from '@/store'
import SearchLoad from '@/components/load/search'
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'

const defaultStyle = 'flex justify-center items-center flex-col relative max-w-layout min-h-layout mx-auto'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { search } = useStore((state) => state)

  return (
    <>
      <div className={defaultStyle}>
        {/* <ThemeButton /> */}
        <Header />
        <Main>{children}</Main>
        <Footer />
      </div>
      {search && <SearchLoad />}
    </>
  )
}

export default Layout
