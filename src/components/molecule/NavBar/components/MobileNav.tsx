import type IRoutes from '@/@types/route'
import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import useStore from '@/store'
import { AnimatePresence, motion } from 'framer-motion'

const wrapMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { type: 'spring', duration: 0.4 },
}
// 부모요소 모션
const navListMotion = {
  open: {
    clipPath: 'inset(0% 0% 0% 0% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: 'inset(10% 50% 90% 50% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.3,
    },
  },
}

// 자식요소 모션
const navItemMotion = {
  open: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
}

const wrapStyle = `fixed top-0 left-0 flex justify-center items-center w-full h-[100dvh] bg-[rgba(0,0,0,0.45)] z-[1000] select-none backdrop-blur-[3px]`
const LinkMotion = motion(Link)

export default function MobileNav({ list }: { list: IRoutes[] }) {
  const [render, setRender] = useState(false)
  const { isNav, setNav } = useStore((state) => state)

  const closeNav = useCallback(() => {
    setNav(false)
  }, [])

  useEffect(() => {
    if (isNav) setRender(true)
    else setRender(false)
  }, [isNav])

  return (
    <AnimatePresence>
      {isNav && (
        <motion.div className={wrapStyle} onClick={closeNav} {...wrapMotion}>
          <motion.div initial={false} animate={render ? 'open' : 'closed'}>
            <motion.div variants={navListMotion} className="flex flex-col justify-center items-center gap-lg">
              {list
                .filter((route) => route.show)
                .map((route) => (
                  <LinkMotion key={route.id} href={route.path} variants={navItemMotion} className="text-[28px] text-white font-bold">
                    {route.title}
                  </LinkMotion>
                ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
