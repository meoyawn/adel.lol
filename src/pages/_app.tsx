import "../tailwind.css"
import React from "react"
import type { AppProps } from "next/app"

// noinspection JSUnusedGlobalSymbols
export default function MyApp({ Component, pageProps }: AppProps) {
  if (process.env.NODE_ENV === "development") {
    console.log("AppProps", { Component, pageProps })
  }

  return <Component {...pageProps} />
}
