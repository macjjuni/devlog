import colorMode from 'utils/colorMode'
import { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { MobileNav } from '../Header.style'

const DropNav = () => {
  const [isDown, setDown] = useState(false)

  const toggleMenu = () => {
    setDown((prev) => !prev)
  }
  return (
    <MobileNav.Wrap>
      <MobileNav.Button type="button" className="mobile-nav-toggle" onClick={toggleMenu}>
        <HiMenuAlt3 fontSize={30} />
      </MobileNav.Button>
      {isDown && (
        <MobileNav.MenuWrap className={colorMode.getColorMode()}>
          <MobileNav.MenuItem>Home</MobileNav.MenuItem>
          <MobileNav.MenuItem>About</MobileNav.MenuItem>
        </MobileNav.MenuWrap>
      )}
    </MobileNav.Wrap>
  )
}
export default DropNav
