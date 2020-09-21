import React, { PropsWithChildren } from "react"

export default function Layout({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <div className="container px-4 max-w-xl mx-auto py-6">
      {children}
    </div>
  )
}
