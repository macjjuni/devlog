import Link from 'next/link'
import { router } from '../../router'

const Header = () => {
  return (
    <header>
      {router.map((route) => (
        <Link key={route.id} href={route.path}>
          {route.title}
        </Link>
      ))}
    </header>
  )
}

export default Header
