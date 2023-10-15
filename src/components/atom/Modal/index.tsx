import { useEffect, MouseEvent, useCallback } from 'react'
import useStore from '@/store'
import common from '@/styles/common'
import { motion, AnimatePresence } from 'framer-motion'
import { IoMdClose } from 'react-icons/io'

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
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0 },
    transition: { type: 'spring', duration: 0.012 },
  },
}

const wrapStyle = `fixed top-0 left-0 flex justify-center items-center w-full h-full bg-[rgba(0,0,0,0.24)] z-[1000] select-none backdrop-blur-[3px]`
const contentStyle = `flex flex-col justify-between max-w-[340px] w-full p-lg bg-BLG0 rounded-sm shadow-modal border ${common.borderColor} ${common.bgColor}`

const topWrapStyle = `flex justify-between items-center w-full`
const bottomWrapStyle = 'flex flex-col justify-between min-h-[60px] mt-lg'

const Modal = ({ children, title }: IModal) => {
  const { modal, setModal } = useStore((state) => state)

  const closeModal = useCallback((e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (e.currentTarget?.tagName !== 'BUTTON' && e.target !== e.currentTarget) return
    setModal({ key: null })
  }, [])

  const onKeydown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setModal({ key: null })
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', onKeydown)
  }, [])

  return (
    <AnimatePresence>
      {modal !== null && (
        <motion.div className={wrapStyle} onClick={closeModal} {...modalMotion.wrap}>
          <motion.div className={contentStyle} {...modalMotion.content}>
            <div className={topWrapStyle}>
              <div className="text-lg font-bold">{title}</div>
              <button type="button" onClick={closeModal}>
                <IoMdClose fontSize={24} />
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
