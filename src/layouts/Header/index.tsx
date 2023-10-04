import { useEffect, useRef, useCallback } from 'react'
import NavBar from '@/components/molecule/NavBar'
import Logo from '@/components/atom/Logo'
import common from '@/styles/common'

const defaultStyle = `fixed top-0 left-1/2 translate-x-[-50%] w-full h-header border-b ${common.borderColor} ${common.textColor} ${common.bgColor} transition-all z-[200]`
const toggleStyle = (isHide: boolean) => `${defaultStyle} ${isHide ? 'translate-y-[-100px]' : ''}`

const toggleClass = 'hide'

const Header = () => {
  const headerRef = useRef<HTMLHeadElement>(null)
  const prevScrollPos = useRef(0)
  // const { isHide } = useStore((state) => state)

  const moveToScroll = useCallback(() => {
    const currentScrollPos = window.scrollY
    if (currentScrollPos > prevScrollPos.current) {
      headerRef.current?.classList.add(toggleClass)
    } else {
      headerRef.current?.classList.remove(toggleClass)
    }
    prevScrollPos.current = currentScrollPos
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', moveToScroll, { passive: true })
  }, [])

  return (
    <header ref={headerRef} className={toggleStyle(false)}>
      <div className="flex justify-between items-center max-w-header w-full h-full px-lg mx-auto">
        <Logo />
        <NavBar />
      </div>
    </header>
  )
}

export default Header
