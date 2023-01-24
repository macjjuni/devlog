import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.png" alt="Kkusaeng Logo" width="45" height="45" />
    </Link>
  )
}

export default Logo
