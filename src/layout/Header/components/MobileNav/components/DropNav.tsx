import { useRef, useEffect } from 'react'
import { pages } from 'router'
import { useAppSelector } from 'redux/hook'
import { MobileNavAnimation } from '../framer-motion'
import * as M from '../MobileNav.style'

const DropNav = ({ closeNav }: { closeNav: () => void }) => {
  const colorMode = useAppSelector((state) => state.colorMode.theme)
  const dropRef = useRef<HTMLDivElement>(null)

  const handleOtherClick = (e: MouseEvent) => {
    if (e.target instanceof HTMLElement) {
      const res = dropRef.current?.contains(e.target)
      if (!res) closeNav()
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleOtherClick)
    return () => window.removeEventListener('click', handleOtherClick)
  }, [])

  return (
    <M.NavWrap ref={dropRef} {...MobileNavAnimation}>
      <M.NavList colorMode={colorMode}>
        {pages.map((page) => (
          <M.NavItem key={page.id}>
            <M.NavLink href={page.path}>{page.title}</M.NavLink>
          </M.NavItem>
        ))}
      </M.NavList>
    </M.NavWrap>
  )
}

export default DropNav
