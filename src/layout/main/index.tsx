import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import { MainStyled, MainAnimation } from './style'

const Main = ({ children }: { children: ReactNode }) => {
  const { route } = useRouter()
  return (
    <AnimatePresence mode="wait">
      <MainStyled {...MainAnimation} key={route}>
        {children}
      </MainStyled>
    </AnimatePresence>
  )
}

export default Main
