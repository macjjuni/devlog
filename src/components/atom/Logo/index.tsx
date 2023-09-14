import Link from 'next/link'
import LogoStyled from './style'

const title = process.env.NEXT_PUBLIC_LOGO || 'KKU'

const Logo = () => {
  return (
    <LogoStyled>
      <Link href="/">{title} </Link>
    </LogoStyled>
  )
}

export default Logo
