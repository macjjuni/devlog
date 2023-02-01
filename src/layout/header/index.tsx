import { HeaderStyled } from './style'
import Logo from './components/logo'
import MenuList from './components/menuList'

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <MenuList />
    </HeaderStyled>
  )
}

export default Header
