import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Logo = () => {
  return (
    <motion.h1 whileHover={{ rotate: 15, scale: 1.05 }} transition={{ duration: 0.4 }}>
      <Link href="/">
        <Image src="/logo.png" alt="Kkusaeng Logo" width="45" height="45" />
      </Link>
    </motion.h1>
  )
}

export default Logo
