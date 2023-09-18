import { useEffect, useRef } from 'react'
import useStore from '@/store'

const HeaderObserver = () => {
  const obsRef = useRef<HTMLDivElement | null>(null) // observer element
  const { setHide } = useStore((state) => state)

  const obsHandler: IntersectionObserverCallback = (entries) => {
    const isVisible = entries[0].isIntersecting
    setHide(!isVisible)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 })
    if (obsRef.current) observer.observe(obsRef.current)
    return () => {
      observer.disconnect()
    }
  }, [])

  return <div className="absolute top-headerEnd w-[1px] h-[1px] m-0" ref={obsRef} />
}

export default HeaderObserver
