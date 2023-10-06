import { useCallback } from 'react'
import dynamic from 'next/dynamic'
import colorMode from '@/utils/colorMode'

const MoonSvg = dynamic(() => import('@/components/svg/MoonSvg'), { ssr: false })
const SunSvg = dynamic(() => import('@/components/svg/SunSvg'), { ssr: false })

const defaultStyle = 'relative w-[50px] h-[50px] pointer select-none overflow-hidden'

const ThemeButton = () => {
  const toggleTheme = useCallback(() => {
    colorMode.toggleColorMode()
  }, [])

  return (
    <button type="button" onClick={toggleTheme} className={defaultStyle}>
      <SunSvg />
      <MoonSvg />
    </button>
  )
}
export default ThemeButton
