import React, { ReactNode } from "react"

import SEO from "../components/SEO"

const External = ({ href, children }: { href: string, children: ReactNode }) => (
  <a
    className="hover:underline duration-200 font-medium dark:text-white"
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
)

// noinspection JSUnusedGlobalSymbols
export default function Index(): JSX.Element {
  return (
    <div className="flex flex-col space-y-5">
      <SEO
        title="Adel Nizamutdinov"
        description="Personal Website"
      />

      <a
        className="rounded-xl bg-black text-white p-5 transform hover:-translate-y-0.5 hover:shadow-xl dark:hover:shadow-dark-lg duration-200"
        href="https://listenbox.app"
        target="_blank"
        rel="noreferrer"
      >
        <p className="text-xl font-semibold">Listenbox</p>
        <p>YouTube as a podcast</p>
      </a>

      <div
        className="rounded-xl bg-indigo-800 text-white p-5 transform hover:-translate-y-0.5 hover:shadow-xl dark:hover:shadow-dark-lg duration-200"
      >
        <p className="font-medium">Coming in 2021...</p>
      </div>

      <div className="text-center">
        <External href="https://github.com/meoyawn">GitHub</External>
        <span> · </span>
        <External href="mailto:stiggpwnz@gmail.com">Email</External>
        <span> · </span>
        <External href="https://t.me/meoyawn">Telegram</External>
      </div>
    </div>
  )
}
