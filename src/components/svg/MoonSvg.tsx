import { AnimatePresence, motion } from 'framer-motion'
import { colorModeAnimation } from '@/utils/framer'
import { dark } from '@/types/theme'
import useStore from '@/store'
import { ISvg } from '@/types/svg'
import BtcSvg from './BtcSvg'

const MoonSvg = ({ width = 32, height = 32 }: ISvg) => {
  const { color } = useStore((state) => state)

  return (
    <AnimatePresence>
      {color === dark && (
        <motion.div {...colorModeAnimation} className="absolute top-1/2 left-1/2 ml-[-22px] mt-[-22px] w-[44px] h-[44px] flex justify-center items-center">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="#BC7AF9"
              />
            </g>
          </svg>
          <div className="absolute top-2.5 right-2.5">
            <BtcSvg width={12} height={12} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MoonSvg
