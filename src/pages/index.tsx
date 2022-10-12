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
          content={`${process.env.NEXT_PUBLIC_SITE}/api/og`}
        />

        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.0' viewBox='0 0 512 512'%3E%3Cpath d='M241.5 5.6c-34.5 4-62.4 14.9-88.7 34.6-10.7 8.1-27.7 25-35.7 35.6a214.6 214.6 0 0 0-39.6 92.6l-.6 3.9-5.4-.7a67 67 0 0 0-64 36.6 63.4 63.4 0 0 0-5.9 43.6 76 76 0 0 0 13 28.2A69.6 69.6 0 0 0 58 304.6c3.3.4 6 .8 6 1a158.5 158.5 0 0 0-3.3 33.9c-.1 114.1 129.6 194.4 256.8 158.8a208.3 208.3 0 0 0 77.5-41.5c28-24.5 46.7-56 53.7-90.5a213 213 0 0 0 .1-54.1l-1.5-7.2h2.6c5.9-.1 17.1-3.2 25.1-7.1 12-5.9 24.1-18 29.8-30 9.6-20 9.5-39.8-.4-59.8a66 66 0 0 0-59.1-36.5c-10.2-.1-11.3-.2-11.3-1.9a211.9 211.9 0 0 0-43-98.2c-3.2-3.9-11-12.1-17.4-18.2A169 169 0 0 0 241.5 5.6zM194.1 116c5.1 1.7 11.8 4.5 14.9 6.2a128.3 128.3 0 0 1 40 36.5l6 8.6c.4.5 3-2.4 5.6-6.4 2.7-4 8.5-11.1 12.9-15.8 33.7-35.7 77.4-43.4 101.2-17.7 15.8 17.1 19.5 44.6 10.2 75.4a170 170 0 0 1-7.6 18.1l-5.6 11.3 3.4 2.6a157.9 157.9 0 0 1 38.7 46.8c10 19.6 14.2 36.8 14.2 58.5V353H84.2l-.7-6.6a129.5 129.5 0 0 1 7.1-49 147.4 147.4 0 0 1 41-58.6l8.2-7-4.9-9.1c-23.6-45-15.3-94 18.1-106.8a46.7 46.7 0 0 1 22.6-3.4c6.8.2 11.4 1.1 18.5 3.5zM72.6 194.6c2.1.5 2.2 1.3 2.6 13.2.2 7 .3 12.8.2 13-.1.2-2-.6-4.1-1.6a63 63 0 0 0-9.5-3.7c-4.9-1.4-6.1-1.4-9-.2-4.6 2-6.9 4.9-7.4 9.4-.7 5.8 2.1 9.6 9.2 12.2a38.9 38.9 0 0 1 23.3 23.6l1.9 5-4 8.4-4.1 8.3-8.1-.4a43.8 43.8 0 0 1-18.7-81.6 47 47 0 0 1 27.7-5.6zm382.3.9a43.8 43.8 0 0 1 8.1 82.8 33.2 33.2 0 0 1-15 3.4l-8.5.4-4.3-9.1c-4.9-10.5-4.9-11.8 1.4-21.3a35 35 0 0 1 17.7-14.3c5-1.9 7.4-3.5 8.8-5.8 3.9-6.1.6-14.2-6.7-16.6-2.7-.9-4.4-.7-10.1 1.3-3.7 1.3-7.7 2.7-8.7 3.2-1.8.8-1.9.5-1.3-7.6.4-4.6.7-10.3.7-12.6 0-3.1.4-4.3 1.8-4.6a38 38 0 0 1 16.1.8zM422 377.2c0 2.2-4 12-8.3 20.2-17.9 34.5-53 62.7-95.3 76.5-83.3 27.2-176.7-3.1-217.3-70.7a137 137 0 0 1-11.6-25l-.6-2.2h166.5c132.6 0 166.6.3 166.6 1.2z'/%3E%3Cpath d='M200.5 195.6a23.5 23.5 0 0 0-14.8 21.9c0 13 9.8 22.8 22.8 22.8a22.8 22.8 0 0 0 22.1-29.5 23.2 23.2 0 0 0-30.1-15.2zm95.3-.2a21 21 0 0 0-11.1 7.8 23.1 23.1 0 0 0 22.8 36.7c16.8-3.1 24.2-24.1 13.3-37.4a24 24 0 0 0-25-7.1zM218.6 283a14.2 14.2 0 0 0-9.6 13.8c0 4.8 3.2 9.8 13.2 20.6 7.2 7.8 7.4 7.9 12.8 8.3 7.1.5 11.3-1.9 14.1-8.2 2.9-6.6 1.5-10.6-7.9-21.7-4.2-5-8.8-9.9-10.2-10.9a15.8 15.8 0 0 0-12.4-1.9zm66.4-.3c-.8.2-2.5.9-3.6 1.5a128.4 128.4 0 0 0-19 21.6c-6 11.6 7.8 24.8 19.3 18.4a87.3 87.3 0 0 0 20.5-24.5c1-3.2.8-4.5-.8-8.5a10.9 10.9 0 0 0-6.4-7c-4.3-2.1-6.9-2.6-10-1.5z'/%3E%3C/svg%3E"
        />
      </Head>

      <TheTabs />
    </div>
  )
}
