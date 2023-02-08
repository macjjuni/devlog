import Script from 'next/script'
import { useEffect, type ReactNode } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

const WithGAnalystics = ({ children }: { children: ReactNode }) => {
  const isProd = process.env.NODE_ENV === 'production'
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
