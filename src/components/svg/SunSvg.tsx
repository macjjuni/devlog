import { AnimatePresence, motion } from 'framer-motion'
import { colorModeAnimation } from '@/utils/framer'
import { light } from '@/@types/theme'
import { ISvg } from '@/@types/svg'
import useStore from '@/store'
import BtcSvg from './BtcSvg'

const SunSvg = ({ width = 40, height = 40 }: ISvg) => {
  const { color } = useStore((state) => state)
  return (
    <AnimatePresence>
      {color === light && (
        <motion.div {...colorModeAnimation} className="absolute top-1/2 left-1/2 ml-[-22px] mt-[-22px] w-[44px] h-[44px] flex justify-center items-center">
          <BtcSvg />
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
              <circle cx="12" cy="12" r="6" stroke="#F7931A" strokeWidth="1.5" />
              <path d="M12 2V3" stroke="#F7931A" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M12 21V22" stroke="#F7931A" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M22 12L21 12" stroke="#F7931A" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M3 12L2 12" stroke="#F7931A" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M19.0708 4.92969L18.678 5.32252" stroke="#F7931A" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M5.32178 18.6777L4.92894 19.0706" stroke="#F7931A" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M19.0708 19.0703L18.678 18.6775" stroke="#F7931A" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M5.32178 5.32227L4.92894 4.92943" stroke="#F7931A" strokeWidth="1.5" strokeLinecap="round" />
            </g>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SunSvg
