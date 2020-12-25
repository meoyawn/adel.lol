import React, { ReactNode } from "react";
import Head from "next/head";

export default function SEO({
  title,
  children,
  description,
  image = `${process.env.NEXT_PUBLIC_SITE}/icons/icon200.png`,
  twitterCard = "summary",
  twitterSite = "@meoyawn",
}: {
  children?: ReactNode
  title: string
  description?: string
  image?: string
  twitterCard?: "summary" | "player" | "summary_large_image"
  twitterSite?: string
}): JSX.Element {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && (
        <>
          <meta property="og:image" content={image} />
          <meta property="og:image:alt" content={title} />
        </>
      )}

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && (
        <>
          <meta name="twitter:image" content={image} />
          <meta name="twitter:image:alt" content={title} />
        </>
      )}

      {twitterSite && <meta name="twitter:site" content={twitterSite} />}

      {children}
    </Head>
  )
}
