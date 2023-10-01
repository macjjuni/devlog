import { useCallback } from 'react'
// import dynamic from 'next/dynamic'
import colorMode from '@/utils/colorMode'

// const MoonSvg = dynamic(() => import('@/components/svg/MoonSvg'), { ssr: false })
// const SunSvg = dynamic(() => import('@/components/svg/SunSvg'), { ssr: false })
// fixed top-header right-0
const defaultStyle = 'w-[80px] h-[80px] p-0 z-[100] pointer select-none'

const ThemeButton = () => {
  const toggleTheme = useCallback(() => {
    colorMode.toggleColorMode()
  }, [])

  return (
    <button type="button" onClick={toggleTheme} className={defaultStyle}>
      C
      {/* <MoonSvg color={color} />
      <SunSvg color={color} /> */}
    </button>
  )
}
export default ThemeButton
