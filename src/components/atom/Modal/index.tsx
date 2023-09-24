import useStore from '@/store'
import { motion, AnimatePresence } from 'framer-motion'
import { MouseEvent, useCallback } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
// import common from '@/styles/common'

interface IModal {
  children: React.ReactNode
  title: string
}

const modalMotion = {
  wrap: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { type: 'spring', duration: 0.24 },
  },
  content: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0 },
    transition: { type: 'spring', duration: 0.24 },
  },
}

const wrapStyle = `fixed top-0 left-0 flex justify-center items-center w-full h-full bg-[rgba(0,0,0,0.2)] z-[1000] select-none`
const contentStyle = `flex flex-col justify-between max-w-[340px] w-full p-lg bg-BLG0 rounded-sm shadow-modal`

const topWrapStyle = `flex justify-between items-center w-full`
const bottomWrapStyle = 'min-h-[60px] py-md'

const Modal = ({ children, title }: IModal) => {
  const { isModal, setModal } = useStore((state) => state)

  const closeModal = useCallback((e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (e.currentTarget?.tagName !== 'BUTTON' && e.target !== e.currentTarget) return
    setModal(false)
  }, [])

  return (
    <AnimatePresence>
      {isModal && (
        <motion.div className={wrapStyle} onClick={closeModal} {...modalMotion.wrap}>
          <motion.div className={contentStyle} {...modalMotion.content}>
            <div className={topWrapStyle}>
              <div className="text-lg">{title}</div>
              <button type="button" onClick={closeModal}>
                <AiOutlineCloseCircle fontSize={24} />
              </button>
            </div>
            <div className={bottomWrapStyle}>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
