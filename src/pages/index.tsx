import React, { PropsWithChildren } from "react"
import SEO from "../components/SEO"

const External = ({ href, children }: PropsWithChildren<{ href: string }>) => (
  <a
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
    <div className="prose sm:prose-lg dark:prose-dark">
      <SEO
        title="Adel Nizamutdinov"
        description="Personal Website"
      />

      <h1>Adel Nizamutdinov</h1>
      <p>Building things for fun and profit</p>

      <table>
        <tbody>
          <tr>
            <td className="font-mono">2012 — 2014</td>
            <td align="right"><External href="https://4pda.ru/2012/07/22/66795">VK Vibes</External></td>
          </tr>

          <tr>
            <td className="font-mono">2019 —</td>
            <td align="right"><External href="https://listenbox.app">Listenbox</External></td>
          </tr>

          <tr>
            <td className="font-mono">2020 —</td>
            <td align="right"><External href="https://sumptum.com">Sumptum</External></td>
          </tr>
        </tbody>
      </table>

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
