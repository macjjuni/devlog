import * as H from './Header.style'
import Logo from './components/Logo'
import NavList from './components/NavList'
import MobileNav from './components/MobileNav'

const Header = () => {
  return (
    <H.Header>
      <Logo />
      <NavList />
      <MobileNav />
    </H.Header>
  )
}

export default Header
