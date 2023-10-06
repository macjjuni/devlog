import { useEffect } from 'react'
import colorMode from '@/utils/colorMode'

const ThemeInitializer = () => {
  useEffect(() => {
    colorMode.initColor()
  }, [])

  return null
}

export default ThemeInitializer
