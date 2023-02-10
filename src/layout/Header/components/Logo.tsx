import * as L from '../Header.style'

const Logo = () => {
  return (
    <L.Logo whileHover={{ rotate: 5 }} transition={{ duration: 0.2 }} className="logo-h1">
      <L.LogoLink href="/" className="logo-a">
        {process.env.NEXT_PUBLIC_LOGO}
      </L.LogoLink>
    </L.Logo>
  )
}

export default Logo
