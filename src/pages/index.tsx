import React from "react"
import Head from "next/head"

import { TheTabs } from "../app/TheTabs"

// noinspection JSUnusedGlobalSymbols
export default function Home() {
  const title = "Adel Nizamutdinov"

  return (
    <div className="container mx-auto max-w-md py-8 px-4 sm:py-24">
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />

        <meta name="description" content="Making new stuff" />
      </Head>

      <TheTabs />
    </div>
  )
}
