import Link from 'next/link'
import { useRouter } from 'next/router'
import ToggleButton from './toggleButton'
import { pages } from '../../../router'

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
          <ToggleButton />
        </ul>
      </nav>
    </>
  )
}

export default MenuList
