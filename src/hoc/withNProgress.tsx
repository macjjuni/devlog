import { ReactNode, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { colors } from 'styles/theme'

const { primary } = colors

const options = {
  speed: 200,
  height: '4px',
  showSpinner: false,
  color: primary.MED,
}

NProgress.configure({ speed: options.speed, showSpinner: options.showSpinner })

const WithNProgress = ({ children }: { children: ReactNode }) => {
  const { events } = useRouter()

  const handleStart = useCallback(() => {
    NProgress.start()
  }, [])
  const handleStop = useCallback(() => {
    NProgress.done()
  }, [])

  useEffect(() => {
    events.on('routeChangeStart', handleStart)
    events.on('routeChangeComplete', handleStop)
    events.on('routeChangeError', handleStop)
    return () => {
      events.off('routeChangeStart', handleStart)
      events.off('routeChangeComplete', handleStop)
      events.off('routeChangeError', handleStop)
    }
  }, [])

  return (
    <>
      <style jsx global>
        {`
          #nprogress .bar {
            background: ${options.color};
            height: ${options.height};
          }
        `}
      </style>
      {children}
    </>
  )
}

export default WithNProgress
