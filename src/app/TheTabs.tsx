import React from "react"
import classNames from "classnames"
import { Tab } from "@headlessui/react"

import { ListItem, StackedList } from "./StackedList"

const tabs = {
  saas: "SaaS",
  tools: "Tools",
  toys: "Toys",
} as const

type TabID = keyof typeof tabs

const saases: ReadonlyArray<ListItem> = [
  {
    href: "https://listenbox.app",
    name: "Listenbox",
    subtitle: "YouTube to podcast converter",
    svg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.0' viewBox='0 0 512 512'%3E%3Cpath d='M0 256v256h512V0H0v256zm184.2-31.3.3 71.8 26.8.3 26.7.2v51l-59.2-.2-59.3-.3-.3-96c-.1-52.8 0-96.6.3-97.3.3-.9 7.8-1.2 32.5-1.2h32l.2 71.7zM335.3 154c35.6 3.4 54.6 21.2 55 51.5a37 37 0 0 1-2.7 17.8 54.7 54.7 0 0 1-6.8 12.8l-3.9 5 6.3 6.3a50.9 50.9 0 0 1 15.8 39.2c0 10.6-2.6 21.9-6.7 29.7a65.2 65.2 0 0 1-39.8 28.9c-7.6 2.1-10.3 2.2-55.7 2.6l-47.8.3v-96.9c0-53.3.3-97.2.7-97.5 1-1.1 73.7-.8 85.6.3z'/%3E%3Cpath d='M149 250.5V324h72v-6h-65V177h-7v73.5zm129.7-72.8c-.4.3-.7 33.4-.7 73.5V324h27.3c30.3 0 35.7-.8 45.9-6.2 12.6-6.7 19.7-21.1 18.5-37.3-.7-9-3.4-14.9-9.8-21.5a34.1 34.1 0 0 0-16.2-9.9l-5-1.7 5.7-2.9a36.8 36.8 0 0 0 16.3-17.2c2.3-4.9 2.5-6.4 2.1-15.1-.3-7.2-1-11-2.7-14.9-4.2-9.6-14.7-16.8-27.6-19.2-6.3-1.2-52.7-1.5-53.8-.4zm54 7.3c10.9 2.4 18.9 9.2 21.4 18.3.7 2.3 1.2 7.3 1.2 11.2 0 9.1-3 16.2-9.1 21.5-7.3 6.4-11.4 7.3-37.4 7.8l-22.8.4V184h21c11.5 0 23.1.5 25.7 1zm7.8 68.9a30.2 30.2 0 0 1 16.3 11.3 30.6 30.6 0 0 1 5.4 19.8c-.1 12.8-4.2 20.5-13.5 25.9-9 5.1-14.9 6.1-39.9 6.8l-22.8.6v-67.5l24.3.4c21.9.4 24.8.7 30.2 2.7z'/%3E%3Cpath d='M309.7 199.7c-.4.3-.7 6.5-.7 13.6v13l7-.5c10.8-.8 14-3.9 14-13.6 0-6.4-2.8-10.8-7.7-12.1-4.3-1.2-11.6-1.5-12.6-.4zm.1 68.9a94 94 0 0 0-.8 17.2v16.5l8.4-.5c13.6-.9 20.6-6.4 20.6-16.3-.1-6.6-3.1-11.9-8.4-14.4-4.7-2.3-18.4-4-19.8-2.5z'/%3E%3C/svg%3E",
  },
]

const tools: ReadonlyArray<ListItem> = [
  {
    href: "https://arrowbox.co",
    name: "Arrowbox",
    subtitle: "Diagramming tool",
    svg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 210 210'%3E%3Cpath stroke='%23000' stroke-linecap='square' stroke-width='20' d='M45 148.7 103.6 27a1 1 0 0 1 1.8 0l58 123.7a1 1 0 0 1-1 1.4H94'/%3E%3C/svg%3E",
  },
  {
    name: "Responsible",
    subtitle: "OpenAPI-like DSL for server verification and client generation",
    href: "https://github.com/meoyawn/responsible",
    svg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 1024 1024'%3E%3Cpath fill='%231B1F23' fill-rule='evenodd' d='M512 0A511.9 511.9 0 0 0 0 512c0 226.6 146.6 418 350 485.8 25.7 4.4 35.3-11 35.3-24.4 0-12.1-.7-52.4-.7-95.3-128.6 23.7-161.9-31.4-172.1-60.2-5.8-14.7-30.7-60.1-52.5-72.3-18-9.6-43.5-33.3-.6-34 40.3-.6 69 37.2 78.7 52.6 46 77.4 119.7 55.6 149.1 42.2 4.5-33.3 18-55.7 32.6-68.5-113.9-12.8-233-57-233-252.8 0-55.7 20-101.7 52.6-137.6-5.2-12.8-23-65.3 5-135.7 0 0 43-13.4 140.9 52.5a475 475 0 0 1 128-17.3c43.5 0 87 5.8 128 17.3 97.9-66.5 140.8-52.5 140.8-52.5 28.1 70.4 10.2 123 5.1 135.7a198.1 198.1 0 0 1 52.5 137.6c0 196.5-119.7 240-233.6 252.8 18.5 16 34.5 46.7 34.5 94.7 0 68.5-.6 123.6-.6 140.8 0 13.5 9.6 29.5 35.2 24.4A512.8 512.8 0 0 0 1024 512C1024 229.1 794.9 0 512 0Z' clip-rule='evenodd'/%3E%3C/svg%3E",
  },
  {
    name: "Storagecast",
    href: "https://storagecast.vercel.app",
    subtitle: "Yandex.Disk as a podcast",
    svg: "data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M44.3 424H26a18.4 18.4 0 01-18.4-18.4V281.3c0-10.2 8.2-18.4 18.4-18.4h18.4v161z' fill='%235766cb'/%3E%3Cpath d='M83.4 442.4h-23c-8.9 0-16-7.2-16-16.1V260.6c0-8.9 7.1-16.1 16-16.1h23c9 0 16.1 7.2 16.1 16.1v165.7c0 8.9-7.2 16-16 16z' fill='%238993da'/%3E%3Cpath d='M83.4 244.5H59.3c8.3.6 15 7.6 15 16.1v165.7c0 8.5-6.7 15.4-15 16h24.1c9 0 16.1-7.1 16.1-16V260.6c0-8.9-7.2-16.1-16-16.1z' fill='%23707dd3'/%3E%3Cpath d='M467.7 424H486c10.2 0 18.4-8.3 18.4-18.4V281.3c0-10.2-8.2-18.4-18.4-18.4h-18.4z' fill='%235766cb'/%3E%3Cpath d='M428.6 442.4h23c8.9 0 16-7.2 16-16.1V260.6c0-8.9-7.1-16.1-16-16.1h-23c-9 0-16.1 7.2-16.1 16.1v165.7c0 8.9 7.2 16 16 16z' fill='%238993da'/%3E%3Cpath d='M451.6 244.5h-24.2c8.4.6 15 7.6 15 16.1v165.7c0 8.5-6.6 15.4-15 16h24.2c8.9 0 16-7.1 16-16V260.6c0-8.9-7.1-16.1-16-16.1z' fill='%23707dd3'/%3E%3Cpath d='M256 7.5a230 230 0 00-189 99 11.5 11.5 0 001.3 14.7l10 10a11.5 11.5 0 0017.6-1.8 193.2 193.2 0 01320.2 0c4 6 12.5 6.9 17.7 1.7l9.9-9.9c4-4 4.5-10.1 1.3-14.7a230 230 0 00-189-99z' fill='%2386a0af'/%3E%3Cpath d='M131.8 456V215.6a48.5 48.5 0 0148.4-48.5h201v289H131.9z' fill='%23b3e59f'/%3E%3Cpath d='M358 167.1h23.3v289H358z' fill='%2395d6a4'/%3E%3Cpath d='M195.4 209.5h141.4v70.7H195.4z' fill='%23f9f6f9'/%3E%3Cpath d='M180.2 504.5a48.5 48.5 0 010-97h201v97z' fill='%23ccf49f'/%3E%3Cpath d='M381.3 439.9h-201a16.2 16.2 0 000 32.3h201z' fill='%23f9f6f9'/%3E%3Cpath d='M486 255.4h-10.8v-17.8c0-38.2-10-75.6-28.7-108.5l2.5-2.6a19 19 0 002.1-24.3C406.6 38.2 333.7 0 256 0S105.4 38.2 60.9 102.2a19 19 0 002.1 24.3l2.5 2.6a218.9 218.9 0 00-28.7 108.5v17.8H26a26 26 0 00-25.9 26v124.2a26 26 0 0026 25.9h11.4a23.6 23.6 0 0023 18.4h23c13 0 23.6-10.6 23.6-23.6v-18.8a7.5 7.5 0 00-15 0v18.8c0 4.7-3.8 8.6-8.6 8.6h-23a8.6 8.6 0 01-8.6-8.6V260.5c0-4.7 4-8.5 8.6-8.5h23c4.8 0 8.6 3.9 8.6 8.6v112a7.5 7.5 0 0015 0v-112c0-13-10.6-23.6-23.6-23.6h-23c-3 0-6 .6-8.6 1.6v-1a204 204 0 0125-98.1 19 19 0 0025.3-6 185.8 185.8 0 01307.8 0 19 19 0 0025.2 6 204 204 0 0125 98v1.1c-2.6-1-5.5-1.6-8.5-1.6h-23c-13 0-23.6 10.6-23.6 23.6v165.7c0 13 10.6 23.6 23.6 23.6h23c11.2 0 20.6-8 23-18.4h11.5a26 26 0 0025.9-26V281.4a26 26 0 00-26-25.9zM15 405.6V281.3c0-6 4.9-10.9 11-10.9h10.8v146H26c-6 0-10.9-4.8-10.9-10.8zM425.3 127a4 4 0 01-3-1.8 200.8 200.8 0 00-332.6 0 4 4 0 01-3 1.8c-.7 0-2 0-3.2-1.2l-9.9-9.9a4 4 0 01-.4-5.1C114.9 50.8 183.2 15 256 15s141.1 35.8 182.8 95.8a4 4 0 01-.4 5.1l-10 10a4 4 0 01-3 1zM497 405.6c0 6-4.9 10.9-11 10.9h-10.8v-70a7.5 7.5 0 00-15 0v79.8c0 4.7-3.9 8.6-8.6 8.6h-23a8.6 8.6 0 01-8.6-8.6V260.6c0-4.7 3.8-8.6 8.6-8.6h23c4.7 0 8.5 3.8 8.6 8.5v51a7.5 7.5 0 0015 0v-41.1H486c6 0 10.9 4.9 10.9 11z'/%3E%3Cpath d='M195.4 202a7.5 7.5 0 00-7.5 7.5v70.7c0 4.2 3.3 7.5 7.5 7.5h141.4c4.2 0 7.5-3.3 7.5-7.5v-70.7c0-4.1-3.3-7.5-7.5-7.5zm134 70.7H202.8V217h126.4z'/%3E%3Cpath d='M388.8 231.8a7.5 7.5 0 00-15 0V400H180.2a55.8 55.8 0 00-41 18V215.5a41 41 0 0141-41h193.6v22.2a7.5 7.5 0 0015 0V167c0-4.1-3.4-7.5-7.5-7.5h-201a56 56 0 00-56 56V456a56 56 0 0056 56h201c4.1 0 7.5-3.4 7.5-7.5zm-15 224.2v8.7H180.2a8.7 8.7 0 010-17.4h193.6v8.7zm-193.6 41a41 41 0 010-82h193.6v17.3H180.2a23.7 23.7 0 000 47.4h193.6V497z'/%3E%3C/svg%3E%0A",
  },
]

const toys: ReadonlyArray<ListItem> = [
  {
    name: "Muscovy",
    href: "https://moscow-cancer.vercel.app",
    subtitle: "Territories of Muscovy by year of conquest",
  },
]

const TheTab = ({ id }: { id: TabID }) => {
  switch (id) {
    case "saas":
      return <StackedList items={saases} />

    case "tools":
      return <StackedList items={tools} />

    case "toys":
      return <StackedList items={toys} />
  }
}

export const TheTabs = () => (
  <Tab.Group>
    <div className="border-b border-gray-200">
      <div className="sm:flex sm:items-baseline">
        <h1 className="text-xl font-medium leading-6 text-gray-900">
          Making new stuff
        </h1>

        <div className="mt-4 sm:mt-0 sm:ml-10">
          <Tab.List className="-mb-px flex space-x-8">
            {Object.entries(tabs).map(([id, name]) => (
              <Tab
                key={id}
                className={({ selected }) =>
                  classNames(
                    "whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium",
                    {
                      "border-accent text-accent": selected,
                      "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700":
                        !selected,
                    },
                  )
                }
              >
                {name}
              </Tab>
            ))}
          </Tab.List>
        </div>
      </div>
    </div>

    <Tab.Panels>
      {Object.keys(tabs).map(id => (
        <Tab.Panel key={id}>
          <TheTab id={id as TabID} />
        </Tab.Panel>
      ))}
    </Tab.Panels>
  </Tab.Group>
)
