import NavBar from '@/components/molecule/NavBar'
import Logo from '@/components/atom/Logo'
// import useStore from '@/store'

const defaultStyle = 'fixed top-0 left-1/2 translate-x-[-50%] w-full h-header border-b border-BLG300 bg-BLG0 z-10 transition-header duration-header ease-header'
const toggleStyle = (isHide: boolean) => `${defaultStyle} ${isHide ? 'translate-y-[-100px]' : ''}`

const Header = () => {
  // const { isHide } = useStore((state) => state)

  return (
    <header className={toggleStyle(false)}>
      <div className="flex justify-between items-center max-w-header w-full h-full px-lg mx-auto">
        <Logo />
        <NavBar />
      </div>
    </header>
  )
}

export default Header
