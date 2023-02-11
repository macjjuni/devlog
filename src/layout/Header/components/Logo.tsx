import * as L from '../Header.style'

const Logo = () => {
  return (
    <L.Logo href="/" whileHover={{ rotate: 5 }} transition={{ duration: 0.2 }}>
      {process.env.NEXT_PUBLIC_LOGO}
    </L.Logo>
  )
}

export default Logo
