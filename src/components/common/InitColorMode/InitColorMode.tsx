import { useEffect, useLayoutEffect } from 'react'
import colorMode from 'utils/colorMode'

const useMultiEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

const InitColorMode = () => {
  useMultiEffect(() => {
    colorMode.initColorMode()
  }, [])
  return null
}
export default InitColorMode
