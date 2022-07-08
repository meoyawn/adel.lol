import React from "react"
import Head from "next/head"

import { TheTabs } from "../app/TheTabs"

// noinspection JSUnusedGlobalSymbols
export default function Home() {
  return (
    <div className="container mx-auto max-w-md py-24">
      <Head>
        <title>Adel Nizamutdinov</title>
      </Head>

      <TheTabs />
    </div>
  )
}
