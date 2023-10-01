import { useEffect } from 'react'
import colorMode from '@/utils/colorMode'

const ThemeInit = () => {
  useEffect(() => {
    colorMode.initColor()
  }, [])

  return null
}

export default ThemeInit
