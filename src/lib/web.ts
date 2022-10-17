import { parse } from "node-html-parser"

export const ogImage = async (url: string): Promise<string> => {
  const res = await fetch(url, { redirect: "follow" })
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}`)
  }
  if (!res.headers.get("content-type")?.startsWith("text/html")) {
    throw new Error(`Not HTML at ${url}`)
  }

  const document = parse(await res.text())

  const imgURL =
    document
      .querySelector("meta[property='og:image'], meta[name='og:image']")
      ?.getAttribute("content") ??
    document.querySelector("img")?.getAttribute("src")
  if (!imgURL) throw new Error(`No og:image or img at ${url}`)

  return imgURL.startsWith("http")
    ? imgURL
    : new URL(imgURL, new URL(url).origin).toString()
}
