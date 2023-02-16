import * as L from './Logo.style'

const Logo = () => {
  return (
    <L.Logo href="/" whileHover={{ rotate: 5 }} transition={{ duration: 0.2 }}>
      {/* &#60; / &#62; */}
      {process.env.NEXT_PUBLIC_LOGO}
    </L.Logo>
  )
}

export default Logo
