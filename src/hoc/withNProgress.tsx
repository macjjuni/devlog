import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { ReactNode, useEffect } from 'react'
import { colors } from '../styles/theme'

const { progress } = colors

const options = {
  speed: 350,
  height: '5px',
  showSpinner: false,
  color: progress,
}

NProgress.configure({ speed: options.speed, showSpinner: options.showSpinner })

const WithNProgress = ({ children }: { children: ReactNode }) => {
  const router = useRouter()

  const handleStart = () => {
    // console.log(`Loading: ${url}`)
    NProgress.start()
  }
  const handleStop = () => {
    NProgress.done()
  }

  useEffect(() => {
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)
    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

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
