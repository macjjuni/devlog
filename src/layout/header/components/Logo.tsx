import Link from 'next/link'
import { motion } from 'framer-motion'

const Logo = () => {
  return (
    <motion.h1 whileHover={{ rotate: 4 }} transition={{ duration: 0.4 }}>
      <Link href="/">
        {/* <Image src="/logo.png" alt="Kkusaeng Logo" width="50" height="50" /> */}
        꾸생의 포트폴리오
      </Link>
    </motion.h1>
  )
}

export default Logo
