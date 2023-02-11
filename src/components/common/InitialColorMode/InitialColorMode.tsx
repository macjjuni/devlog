import { useEffect, useLayoutEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hook'
import { setDark, setLight } from 'redux/slice/colorMode'
import { isDark } from 'utils/colorMode'

const useMultiEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

const InitialColorMode = () => {
  const colorMode = useAppSelector((state) => state.colorMode.theme)
  const dispatch = useAppDispatch()
  useMultiEffect(() => {
    if (colorMode !== null) return
    if (isDark()) {
      dispatch(setDark())
      return
    }
    dispatch(setLight())
  }, [])
  return null
}

export default InitialColorMode
