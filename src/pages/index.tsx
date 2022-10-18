import React from "react"
import Head from "next/head"

import { TheTabs } from "../app/TheTabs"

// noinspection JSUnusedGlobalSymbols
export default function Home() {
  return (
    <div className="container mx-auto max-w-md py-8 px-4 sm:py-24">
      <Head>
        <title>Adel Nizamutdinov</title>

        <meta name="description" content="Making new stuff" />

        <meta property="og:title" content="Adel Nizamutdinov" />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_SITE}/img/og.jpg`}
        />
      </Head>

      <TheTabs />
    </div>
  )
}
