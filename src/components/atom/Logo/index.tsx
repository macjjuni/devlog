import Link from 'next/link'

const title = process.env.NEXT_PUBLIC_LOGO || 'KKU'

const Logo = () => {
  return (
    <Link href="/" className="text-logo italic">
      {title}
    </Link>
  )
}

export default Logo
