import { HeaderStyled } from './Header.style'
import Logo from './components/Logo'
import NavList from './components/NavList'

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <NavList />
    </HeaderStyled>
  )
}

export default Header
