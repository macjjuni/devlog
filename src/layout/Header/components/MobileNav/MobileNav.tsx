import { useState, useEffect, useCallback, memo, MouseEvent } from 'react'
import { useRouter } from 'next/router'
import { useAppSelector } from 'redux/hook'
import { AnimatePresence } from 'framer-motion'
import { dark } from 'redux/slice/colorMode'
import { CgMenuRight } from 'react-icons/cg'
import ColorToggleButton from '../ColorToggleButton'
import DropNav from './components/DropNav'
import * as M from './MobileNav.style'

const MobileNav = () => {
  const colorMode = useAppSelector((state) => state.colorMode.theme)
  const [isDrop, setDrop] = useState<boolean>(false)

  const { events } = useRouter()

  const handleToggle = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setDrop((prev) => !prev)
  }
  const closeNav = useCallback(() => setDrop(false), [])

  useEffect(() => {
    events.on('routeChangeStart', closeNav)
    return () => events.off('routeChangeStart', closeNav)
  }, [])

  return (
    <M.MobileNav className="mobile-nav">
      <ColorToggleButton />
      <M.NavToggleButton onClick={handleToggle}>
        <CgMenuRight color={colorMode === dark ? '#fff' : '#000'} fontSize={32} />
      </M.NavToggleButton>
      <AnimatePresence>{isDrop && <DropNav closeNav={closeNav} />}</AnimatePresence>
    </M.MobileNav>
  )
}
export default memo(MobileNav)
