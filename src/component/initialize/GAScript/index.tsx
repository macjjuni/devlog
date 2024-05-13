import Script from 'next/script'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '@/utils/gtag'

const isDev = process.env.NODE_ENV === 'development'

export default function GAScript() {
  const { events } = useRouter()

  useEffect(() => {
    if (isDev) return
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    events.on('routeChangeComplete', handleRouteChange)
    events.on('hashChangeComplete', handleRouteChange)
    return () => {
      events.off('routeChangeComplete', handleRouteChange)
      events.off('hashChangeComplete', handleRouteChange)
    }
  }, [events])

  if (isDev) return null

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
