import Link from 'next/link'
import common from '@/styles/common'

const title = process.env.NEXT_PUBLIC_LOGO || 'KKU'

const Logo = () => {
  return (
    <Link href="/" className={`text-logo italic ${common.textColor}`}>
      {title}
    </Link>
  )
}

export default Logo
