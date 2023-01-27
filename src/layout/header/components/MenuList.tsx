import Link from 'next/link'
import { useRouter } from 'next/router'
import { router } from '../../../router'

const MenuList = () => {
  const { pathname } = useRouter()
  return (
    <>
      <nav>
        <ul>
          {router.map((route) => (
            <li key={route.id}>
              <Link href={route.path} className={pathname === route.path ? 'active' : ''}>
                {route.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default MenuList
