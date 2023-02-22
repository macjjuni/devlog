import { useEffect, useLayoutEffect } from 'react'
import { useAppDispatch } from 'redux/hook'
import { setDark, setLight, dark } from 'redux/slice/colorMode'
import { theme } from 'utils/colorMode'
import { GlobalCSRStyle } from 'styles/globals'

const useMultiEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

const InitialColorMode = () => {
  const dispatch = useAppDispatch()

  useMultiEffect(() => {
    const colorMode = theme.initialColorMode()
    if (colorMode === dark) {
      dispatch(setDark())
      return
    }
    dispatch(setLight())
  }, [])
  return (
    <>
      <GlobalCSRStyle />
    </>
  )
}

export default InitialColorMode
