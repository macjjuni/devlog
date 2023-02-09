import Link from 'next/link'
import { useRouter } from 'next/router'
import { HiMenuAlt3 } from 'react-icons/hi'
import ThemeButton from './ThemeButton'
import { pages } from '../../../router'
import { NavToggleButton } from '../style'

const MenuList = () => {
  const { pathname } = useRouter()
  return (
    <>
      <nav className="header-nav">
        <ul className="nav-list">
          {pages.map((page) => (
            <li key={page.id} className="nav-link">
              <Link href={page.path} className={pathname === page.path ? 'active' : ''}>
                {page.title}
              </Link>
            </li>
          ))}
          <ThemeButton />
        </ul>
      </nav>

      <NavToggleButton type="button" className="mobile-nav-toggle">
        <HiMenuAlt3 fontSize={30} />
      </NavToggleButton>
    </>
  )
}

export default MenuList
