import Logo from '@/components/atom/Logo'
import useStore from '@/store'
import HeaderStyled from './style'
import NavBar from '@/components/molecule/NavBar'

const Header = () => {
  const { isHide } = useStore((state) => state)

  return (
    <HeaderStyled isHide={isHide}>
      <Logo />
      <NavBar />
    </HeaderStyled>
  )
}

export default Header
