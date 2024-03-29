'use client'
import { Suspense, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { GA_TRACKING_ID, existsGaId, pageview } from '@/libs/gtag'

const GoogleAnalyticsScript = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!existsGaId) return
    const url = pathname + searchParams.toString()
    pageview(url)
  }, [pathname, searchParams])

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}

export default function GoogleAnalytics(): JSX.Element {
  return (
    <>
      {GA_TRACKING_ID && (
        <Suspense>
          <GoogleAnalyticsScript />
        </Suspense>
      )}
    </>
  )
}
