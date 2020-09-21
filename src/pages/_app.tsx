import '../tailwind.css'
import React, { useEffect } from "react"
import { AppProps } from 'next/app'
import { initialize as analyticsInit, pageview } from 'react-ga'

import Layout from '../components/Layout'


// noinspection JSUnusedGlobalSymbols
export default function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {

  const googleAnalytics = process.env.NEXT_PUBLIC_GA
  if (googleAnalytics) {
    useEffect(() => {
      analyticsInit(googleAnalytics)
      pageview(window.location.pathname)
      router.events.on('routeChangeComplete', pageview)
      return () => router.events.off('routeChangeComplete', pageview)
    }, [])
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
