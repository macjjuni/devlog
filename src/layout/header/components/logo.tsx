import Link from 'next/link'
import { motion } from 'framer-motion'

const Logo = () => {
  return (
    <motion.h1 whileHover={{ rotate: 4 }} transition={{ duration: 0.4 }} className="logo-h1">
      <Link href="/" className="logo-a">
        {process.env.NEXT_PUBLIC_LOGO}
      </Link>
    </motion.h1>
  )
}

export default Logo
