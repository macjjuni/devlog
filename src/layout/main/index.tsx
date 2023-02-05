import dynamic from 'next/dynamic'
import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'
import { pages } from '../../router'
import { MainStyled, VexelWrap, MotionStyled } from './style'
import { MainAnimation, xWidth } from './framer-motion'

const Voxel = dynamic(() => import('../../components/Voxel'), {
  ssr: false,
})

const Main = ({ children }: { children: ReactNode }) => {
  const { events, route } = useRouter()

  const handleStart = (nextPath: string) => {
    const currentPath = window.location.pathname
    const nowIdx = pages.findIndex((page) => page.path === currentPath)
    const nextIdx = pages.findIndex((page) => page.path === nextPath)
    MainAnimation.initial.x = nowIdx > nextIdx ? -xWidth : xWidth
  }

  useEffect(() => {
    events.on('routeChangeStart', handleStart)
  }, [])

  return (
    <MainStyled>
      <VexelWrap>
        <Voxel />
      </VexelWrap>
      <MotionStyled {...MainAnimation} key={route}>
        {children}
      </MotionStyled>
    </MainStyled>
  )
}

export default Main
