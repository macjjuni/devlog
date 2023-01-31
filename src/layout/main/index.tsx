import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'
import { router as pages } from '../../router'
import { MainStyled, MainAnimation } from './style'

const xSize = 25

const Main = ({ children }: { children: ReactNode }) => {
  const router = useRouter()

  const handleStart = (nextPath: string) => {
    const nowIdx = pages.findIndex((page) => page.path === router.pathname)
    const nextIdx = pages.findIndex((page) => page.path === nextPath)
    if (nowIdx > nextIdx) MainAnimation.initial.x = -xSize
    else MainAnimation.initial.x = xSize
  }

  useEffect(() => {
    router.events.on('routeChangeStart', handleStart)
  }, [router.pathname])

  return (
    <MainStyled {...MainAnimation} key={router.route}>
      {children}
    </MainStyled>
  )
}

export default Main
