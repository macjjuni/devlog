import Script from 'next/script'
import { useEffect, type ReactNode } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

const WithGAnalystics = ({ children }: { children: ReactNode }) => {
  const isProd = process.env.NODE_ENV === 'production'
  const { events } = useRouter()

  useEffect(() => {
    if (!isProd) return
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    events.on('routeChangeComplete', handleRouteChange)
    events.on('hashChangeComplete', handleRouteChange)
    return () => {
      if (!isProd) return
      events.off('routeChangeComplete', handleRouteChange)
      events.off('hashChangeComplete', handleRouteChange)
    }
  }, [events])

  if (isProd) {
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
        {children}
      </>
    )
  } else {
    return <>{children}</>
  }
}

export default WithGAnalystics
