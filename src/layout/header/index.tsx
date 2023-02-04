import { HeaderStyled } from './style'
import Logo from './components/logo'
import NavList from './components/navList'

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <NavList />
    </HeaderStyled>
  )
}

export default Header
