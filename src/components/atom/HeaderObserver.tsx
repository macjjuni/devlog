import { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import useStore from '@/store'

const ToggleHeaderStyled = styled.div`
  width: 1px;
  height: 1px;
  margin: 0;
`

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

  return <ToggleHeaderStyled ref={obsRef} />
}

export default HeaderObserver
