import { useCallback } from 'react'
import Link from 'next/link'
import routes from '@/route'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import useStore from '@/store'
import ThemeButton from '../ThemeButton'
import MobileNav from './components/MobileNav'
import Hamburger from './components/Hamburger'

const defaultStyle = (style: string) => `${style} text-nav p-xs`

const NavBar = () => {
  const { pathname } = useRouter()
  const { isNav, setNav } = useStore((state) => state)

  const getNavStyle = (path: string) => {
    const filteredPathname = pathname.split('/')[1]

    if (path === '/' && filteredPathname === '') return defaultStyle('font-[600]') // home
    if (filteredPathname === '') return defaultStyle('')
    if (path.includes(filteredPathname)) return defaultStyle('font-[600]')
    return defaultStyle('')
  }

  const onMobileNav = useCallback(() => {
    setNav(!isNav)
  }, [isNav])

  return (
    <>
      {/* 데스크탑 네비게이션 */}
      <nav className="hidden md:flex items-center gap-xxxl select-none">
        {routes
          .filter((route) => route.show)
          .map((route) => (
            <Link key={route.id} href={route.path} className={getNavStyle(route.path)}>
              {route.title}
            </Link>
          ))}
        <ThemeButton />
      </nav>
      {/* 모바일 네비게이션 */}
      <nav className="md:hidden flex justity-center items-center gap-sm">
        <ThemeButton />
        <motion.button
          type="button"
          aria-label="Mobile Navigation"
          className="relative flex flex-col justify-center items-center gap-[4px] w-[38px] h-[38px] text-BLG400 border border-BLG600 dark:border-BLG300 rounded-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onMobileNav}
        >
          <Hamburger />
        </motion.button>
      </nav>
      <MobileNav list={routes} />
    </>
  )
}

export default NavBar
