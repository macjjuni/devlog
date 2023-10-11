import { useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import routes from '@/route'
import { pagingAnimation, xWidth } from '@/utils/framer'

const defaultStyle = 'flex flex-row flex-1 justify-center items-stretch md:gap-0 lg:gap-xxl relative max-w-main w-full pt-header'
const Main = ({ children }: { children: React.ReactNode }) => {
  const { events, route } = useRouter()

  const handleStart = useCallback((nextPath: string) => {
    const currentPath = window.location.pathname
    const nowIdx = routes.findIndex((page) => page.path === currentPath)
    const nextIdx = routes.findIndex((page) => page.path === nextPath)
    pagingAnimation.initial.x = nowIdx > nextIdx ? -xWidth : xWidth
  }, [])

  useEffect(() => {
    events.on('routeChangeStart', handleStart)
    return () => events.off('routeChangeStart', handleStart)
  }, [])
  return (
    <motion.main key={route} {...pagingAnimation} className={defaultStyle}>
      {children}
    </motion.main>
  )
}

export default Main
