// import dynamic from 'next/dynamic'
import Voxel from 'components/views/Voxel'
import Spinner from 'components/views/Spinner'
import { ReactNode, useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { pages } from 'router'
import { MainStyled, VexelWrap, MotionStyled } from './Main.style'
import { MainAnimation, xWidth } from './framer-motion'

// const Voxel = dynamic(() => import('components/views/Voxel'), {
//   ssr: false,
// })

const Main = ({ children }: { children: ReactNode }) => {
  // 스피너랑 복셀 컴포넌트 렌더링
  const [load, setLoad] = useState(false)
  const { events, route } = useRouter()

  const doneLoad = () => {
    setLoad(true)
  }

  const handleStart = useCallback((nextPath: string) => {
    const currentPath = window.location.pathname
    const nowIdx = pages.findIndex((page) => page.path === currentPath)
    const nextIdx = pages.findIndex((page) => page.path === nextPath)
    MainAnimation.initial.x = nowIdx > nextIdx ? -xWidth : xWidth
  }, [])

  useEffect(() => {
    events.on('routeChangeStart', handleStart)
  }, [])

  return (
    <MainStyled>
      <VexelWrap>
        <Voxel load={load} doneLoad={doneLoad} />
        {!load && <Spinner />}
      </VexelWrap>
      <MotionStyled {...MainAnimation} key={route}>
        {children}
      </MotionStyled>
    </MainStyled>
  )
}

export default Main
