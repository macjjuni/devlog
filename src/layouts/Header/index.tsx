import NavBar from '@/components/molecule/NavBar'
import Logo from '@/components/atom/Logo'
import useStore from '@/store'
import ThemeButton from '@/components/molecule/ThemeButton'
import HeaderStyled from './style'

const Header = () => {
  const { isHide } = useStore((state) => state)

  return (
    <HeaderStyled isHide={isHide}>
      <Logo />
      <NavBar />
      <ThemeButton />
    </HeaderStyled>
  )
}

export default Header
