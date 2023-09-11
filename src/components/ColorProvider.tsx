'use client'

import { useLayoutEffect } from 'react'
// import useStore from '@/store'
// import setThemeColor from '@/utils/colorMode'
import colorMode from '@/utils/colorMode'

const ColorProvider = () => {
  // const colorMode = useStore((state) => state.colorMode)

  useLayoutEffect(() => {
    colorMode.initColor()
  }, [])

  return null
}

export default ColorProvider
