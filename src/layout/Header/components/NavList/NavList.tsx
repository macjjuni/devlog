import { useRouter } from 'next/router'
import { pages } from 'router'
// import ColorToggleButton from '../ColorToggleButton'
import * as N from './NavList.style'

const MenuList = () => {
  const { pathname } = useRouter()
  return (
    <N.Nav>
      <N.NavList>
        <>
          {pages.map((page) => (
            <N.NavItem key={page.id}>
              <N.NavLink href={page.path} className={pathname === page.path ? 'active' : ''}>
                {page.title}
              </N.NavLink>
            </N.NavItem>
          ))}
        </>
        {/* <ColorToggleButton /> */}
      </N.NavList>
    </N.Nav>
  )
}

export default MenuList
