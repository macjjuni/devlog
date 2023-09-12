import NavbarStyled from './style'
import Link from 'next/link'
import routes from '@/route'
import { useRouter } from 'next/router'

const NavBar = () => {
  const { pathname } = useRouter()

  const isActive = (path: string) => {
    if (path === pathname) return 'active'
    return ''
  }

  return (
    <NavbarStyled>
      {routes
        .filter((route) => route.show)
        .map((route) => (
          <Link key={route.id} href={route.path} className={isActive(route.path)}>
            {route.title}
          </Link>
        ))}
    </NavbarStyled>
  )
}

export default NavBar
