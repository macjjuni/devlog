import NavBar from '@/components/molecule/NavBar'
import Logo from '@/components/atom/Logo'
import common from '@/styles/common'
import ThemeButton from '@/components/molecule/ThemeButton'

const defaultStyle = `fixed top-0 left-1/2 translate-x-[-50%] w-full h-header border-b ${common.borderColor} ${common.textColor} ${common.bgColor} transition-colors z-[200]`
const toggleStyle = (isHide: boolean) => `${defaultStyle} ${isHide ? 'translate-y-[-100px]' : ''}`

const Header = () => {
  // const { isHide } = useStore((state) => state)

  return (
    <header className={toggleStyle(false)}>
      <div className="flex justify-between items-center max-w-header w-full h-full px-lg mx-auto">
        <Logo />
        <NavBar />
        <ThemeButton />
      </div>
    </header>
  )
}

export default Header
