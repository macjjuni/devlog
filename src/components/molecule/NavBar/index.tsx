import Link from 'next/link'
import routes from '@/route'
import { useRouter } from 'next/router'
// import { useSession } from 'next-auth/react'

const defaultStyle = (style: string) => `${style} p-sm`

const NavBar = () => {
  // const { data: session } = useSession()
  const { pathname } = useRouter()

  const getNavStyle = (path: string) => {
    const filteredPathname = pathname.split('/')[1]

    if (path === '/' && filteredPathname === '') return defaultStyle('text-navActive') // home
    if (filteredPathname === '') return defaultStyle('')
    if (path.includes(filteredPathname)) return defaultStyle('text-navActive')
  }

  return (
    <nav className="flex items-center gap-xxxl">
      {routes
        .filter((route) => route.show)
        .map((route) => (
          <Link key={route.id} href={route.path} className={getNavStyle(route.path)}>
            {route.title}
          </Link>
        ))}
      {/* {session && <div>123</div>} */}
    </nav>
  )
}

export default NavBar
