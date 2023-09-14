import dynamic from 'next/dynamic'
import useStore from '@/store'
import colorMode from '@/utils/colorMode'

import styled from 'styled-components'

const MoonSvg = dynamic(() => import('@/components/svg/MoonSvg'), { ssr: false })
const SunSvg = dynamic(() => import('@/components/svg/SunSvg'), { ssr: false })

const ThemeButtonStyled = styled.button`
  position: absolute;
  top: -40px;
  right: -40px;
  width: 80px;
  height: 80px;
  padding: 0;
  z-index: 9999;
  background-color: transparent;
  border: none;
  cursor: pointer;

  ${({ theme }) =>
    theme.response.tablet(`
      top: 0px;
      right: 0px;
      width: 64px;
      height: 64px;
  `)}
`

// absolute top-0 right-0 w-[64px] h-[64px] md:w-[80px] md:h-[80px] select-none"

const ThemeButton = () => {
  const color = useStore((state) => state.color)

  return (
    <ThemeButtonStyled onClick={colorMode.toggleColorMode}>
      <MoonSvg color={color} />
      <SunSvg color={color} />
    </ThemeButtonStyled>
  )
}
export default ThemeButton
