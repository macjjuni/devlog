import { HeaderStyled } from './style'
import Logo from './components/Logo'
import MenuList from './components/MenuList'

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <MenuList />
    </HeaderStyled>
  )
}

export default Header
