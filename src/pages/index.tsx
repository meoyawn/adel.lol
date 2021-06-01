import React, { ReactNode } from "react"
import classNames from 'classnames'

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

const Bubble = ({ title, subtitle, className, href }: {
  title: string
  subtitle: string
  className: string
  href: string
}) => (
  <a
    className={classNames("rounded-xl  p-5 transform hover:-translate-y-0.5 shadow-md dark:shadow-dark-md hover:shadow-xl dark:hover:shadow-dark-lg duration-300", className)}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    <p className="text-xl font-semibold">{title}</p>
    <p>{subtitle}</p>
  </a>
)

// noinspection JSUnusedGlobalSymbols
export default function Index(): JSX.Element {
  return (
    <div className="flex flex-col space-y-5">
      <SEO
        title="Adel Nizamutdinov"
        description="it me"
      />

      <Bubble
        title="Arrowbox"
        subtitle="Rapid diagramming"
        className="bg-indigo-800 text-white"
        href="https://alpha.arrowbox.co"
      />

      <Bubble
        title="Listenbox"
        subtitle="YouTube as a podcast"
        className="bg-black text-white"
        href="https://listenbox.app"
      />

      <Bubble
        title="Storagecast"
        subtitle="Yandex.Disk as a podcast"
        className="bg-yellow-50 text-black"
        href="https://storagecast.vercel.app"
      />

      <div className="text-center">
        <External href="mailto:stiggpwnz@gmail.com">Email</External>
        <span> · </span>
        <External href="https://github.com/meoyawn">GitHub</External>
      </div>
    </div>
  )
}
