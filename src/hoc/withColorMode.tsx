import { useEffect, useLayoutEffect, type ReactNode } from 'react'
import colorMode from '../utils/colorMode'

const useMultiEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

const WithColorMode = ({ children }: { children: ReactNode }) => {
  useMultiEffect(() => {
    colorMode.initColorMode()
  }, [])
  return <>{children}</>
}
export default WithColorMode
