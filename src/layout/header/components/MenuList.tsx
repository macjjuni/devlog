import Link from 'next/link'
import { useRouter } from 'next/router'
import ToggleButton from './ToggleButton'
import { router } from '../../../router'

const MenuList = () => {
  const { pathname } = useRouter()
  return (
    <>
      <nav>
        <ul>
          {router.map((route) => (
            <li key={route.id} className="nav-link">
              <Link href={route.path} className={pathname === route.path ? 'active' : ''}>
                {route.title}
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
