import React from "react"

type HttpURL = `https://${string}`

export interface ListItem {
  readonly name: string
  readonly subtitle: string
  readonly href: HttpURL
  readonly image?: HttpURL | `data:image/svg+xml${string}`
}

export const StackedList = ({ items }: { items: ReadonlyArray<ListItem> }) => (
  <ul className="divide-y divide-gray-200">
    {items.map(item => (
      <li key={item.href}>
        <a
          target="_blank"
          rel="noreferrer"
          href={item.href}
          className="flex rounded-sm px-2 py-4 duration-300 hover:bg-neutral-100"
        >
          {item.image ? (
            <img
              className="h-10 w-10 rounded-full"
              src={item.image}
              alt={`${item.name} image`}
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent to-red-600" />
          )}

          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{item.name}</p>
            <p className="text-sm text-gray-500">{item.subtitle}</p>
          </div>
        </a>
      </li>
    ))}
  </ul>
)
