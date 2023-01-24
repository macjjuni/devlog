import Link from 'next/link'
import { router } from '../../../router'

const MenuList = () => {
  return (
    <>
      <nav>
        <ul>
          {router.map((route) => (
            <li key={route.id}>
              <Link href={route.path}>{route.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default MenuList
