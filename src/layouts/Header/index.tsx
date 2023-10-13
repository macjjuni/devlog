// import { useEffect, useRef, useCallback } from 'react'
import NavBar from '@/components/molecule/NavBar'
import Logo from '@/components/atom/Logo'
import common from '@/styles/common'
import useStore from '@/store'

const defaultStyle = `fixed top-0 left-1/2 translate-x-[-50%] w-full h-header ${common.borderColor} ${common.textColor} ${common.bgColor} z-[200]`
const toggleStyle = (isMini: boolean) => `${defaultStyle} ${isMini ? 'h-miniHeader border-b' : ''}`

const Header = () => {
  const { isMiniHeader } = useStore((state) => state)

  return (
    <header className={toggleStyle(isMiniHeader)}>
      <div className="flex justify-between items-center max-w-header w-full h-full px-lg mx-auto overflow-hidden">
        <Logo />
        <NavBar />
      </div>
    </header>
  )
}

export default Header
