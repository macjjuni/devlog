import * as H from './Header.style'
import Logo from './components/Logo'
import NavList from './components/NavList'

const Header = () => {
  return (
    <H.Header>
      <Logo />
      <NavList />
    </H.Header>
  )
}

export default Header
