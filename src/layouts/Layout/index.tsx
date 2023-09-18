// import { motion, AnimatePresence } from 'framer-motion'
import ThemeButton from '@/components/molecule/ThemeButton'
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'

const defaultStyle = 'flex justify-center items-center flex-col relative max-w-layout min-h-layout mx-auto'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={defaultStyle}>
      <ThemeButton />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default Layout
