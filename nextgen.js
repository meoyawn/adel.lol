const fs = require("fs")
const path = require("path")
const { SitemapStream } = require('sitemap')
const sharp = require('sharp')

const readEnv = path =>
  fs.readFileSync(path)
    .toString()
    .split("\n")
    .reduce((obj, line) => {
      const [k, v] = line.split("=", 2)
      return k ? { ...obj, [k]: v } : obj
    }, {})

const dotEnv = Object.assign(...[".env", ".env.production"].map(readEnv))

function genIcons() {
  const iconsDir = path.join("public", "icons");
  fs.rmSync(iconsDir, { recursive: true, force: true })
  fs.mkdirSync(iconsDir)

  const icon = sharp("src/images/icon.png")

  for (const size of [16, 32, 192, 200, 512]) {
    icon
      .resize(size, size)
      .toFile(path.join(iconsDir, `icon${size}.png`))
  }
}

function genSitemap() {
  if (!dotEnv.NEXT_PUBLIC_SITE) {
    throw new Error("define env.NEXT_PUBLIC_SITE to generate a sitemap")
  }

  const EXCLUDE = ["404", "_app", "_document", "index"]

  const sitemap = new SitemapStream({
    hostname: dotEnv.NEXT_PUBLIC_SITE,
  })

  const now = new Date()

  fs.readdirSync(path.join("src", "pages"))
    .filter(name => name.endsWith(".tsx") && !EXCLUDE.some(bad => name.includes(bad)))
    .map(name => ({
      url: `/${name.split(".")[0]}`, // FIXME might contain multiple dots
      priority: 0.8,
      lastmod: now,
    }))
    .concat({
      url: "/",
      priority: 1,
      lastmod: now,
    })
    .forEach(x => sitemap.write(x))

  sitemap.end()
  sitemap.pipe(fs.createWriteStream(path.join("public", "sitemap.xml")))
}

function genManifest() {
  const manifest = {
    icons: [
      {
        src: "/icons/icon192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icons/icon512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    name: dotEnv.SITE_NAME,
    theme_color: dotEnv.THEME_COLOR, // browser toolbar
    background_color: dotEnv.THEME_COLOR, // splash screen
  }

  fs.writeFileSync(path.join("public", "site.webmanifest"), JSON.stringify(manifest))
}

genIcons()
genSitemap()
genManifest()
