import { motion, AnimatePresence } from 'framer-motion'
import common from '@/styles/common'
import Script from 'next/script'
import { useRef, type MouseEvent } from 'react'
// useEffect
const defaultStyle = `fixed bottom-[100px] w-[264px] ${common.trs}`
const btcPaymentMotion = {
  initial: { right: '0', opacity: 0 },
  animate: { right: '24px', opacity: 1 },
  exit: { opacity: 0 },
  transition: { type: 'spring', duration: 0.24 },
}

const BtcPayment = ({ on, onToggle }: { on: boolean; onToggle: () => void }) => {
  const isFunc = useRef(false)

  const onClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const target = e.target as HTMLInputElement
    console.dir(target)
    if (target?.localName === 'lightning-widget') return
    if (isFunc.current) onToggle()
    isFunc.current = true
  }

  // useEffect(() => {
  //   if (on) window.addEventListener('click', onClick)
  //   return () => {
  //     isFunc.current = false
  //     window.removeEventListener('click', onClick)
  //   }
  // }, [on])

  return (
    <AnimatePresence>
      {on && (
        <motion.div className={defaultStyle} {...btcPaymentMotion} onClick={onClick}>
          <lightning-widget
            name="kku.btc"
            accent="#20c997"
            to="macjjuni@strike.me"
            image="https://pbs.twimg.com/profile_images/1677980728041275397/edO2I5Q8_400x400.jpg"
            labels="🏃🏻‍♂️, ☕️, 💻, ⭐️"
          />
          <Script src="https://embed.twentyuno.net/js/app.js" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BtcPayment
