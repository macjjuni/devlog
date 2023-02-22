import { ReactNode, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { pages } from 'router'
import * as M from './Main.style'
import { MainAnimation, xWidth } from './framer-motion'

const Main = ({ children }: { children: ReactNode }) => {
  const { events, route } = useRouter()

  const handleStart = useCallback((nextPath: string) => {
    const currentPath = window.location.pathname
    const nowIdx = pages.findIndex((page) => page.path === currentPath)
    const nextIdx = pages.findIndex((page) => page.path === nextPath)
    MainAnimation.initial.x = nowIdx > nextIdx ? -xWidth : xWidth
  }, [])

  useEffect(() => {
    events.on('routeChangeStart', handleStart)
    return () => events.off('routeChangeStart', handleStart)
  }, [])

  return (
    <M.Main {...MainAnimation} key={route}>
      {children}
    </M.Main>
  )
}

export default Main
