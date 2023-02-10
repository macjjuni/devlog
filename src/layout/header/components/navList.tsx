import Link from 'next/link'
import { useRouter } from 'next/router'
import { pages } from 'router'
import ThemeButton from './ThemeButton'

// import DropNav from './DropNav'

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
      {/* <DropNav /> */}
    </>
  )
}

export default MenuList
