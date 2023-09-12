import Logo from '@/components/atom/Logo'
import useStore from '@/store'
import HeaderStyled from './style'

const Header = () => {
  const { isHide } = useStore((state) => state)

  return (
    <HeaderStyled isHide={isHide}>
      <Logo />
      123
    </HeaderStyled>
  )
}

export default Header
