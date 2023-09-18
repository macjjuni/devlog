import dynamic from 'next/dynamic'
import useStore from '@/store'
import colorMode from '@/utils/colorMode'

const MoonSvg = dynamic(() => import('@/components/svg/MoonSvg'), { ssr: false })
const SunSvg = dynamic(() => import('@/components/svg/SunSvg'), { ssr: false })

const defaultStyle = 'fixed top-0 right-0 w-[80px] h-[80px] p-0 z-100 pointer select-none'

const ThemeButton = () => {
  const color = useStore((state) => state.color)

  return (
    <button type="button" className={defaultStyle} onClick={colorMode.toggleColorMode}>
      <MoonSvg color={color} />
      <SunSvg color={color} />
    </button>
  )
}
export default ThemeButton
