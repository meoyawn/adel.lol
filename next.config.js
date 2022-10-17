/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: false,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "adel.lol",
      "arrowbox.co",
      "cd.wheely.com",
      "infotech.group",
      "listenbox.app",
      "opengraph.githubassets.com",
      "play-lh.googleusercontent.com",
      "uploads-ssl.webflow.com",
      "web.archive.org",
      "yastatic.net",
      "eng.kpfu.ru",
      "upload.wikimedia.org",
    ],
  },
}

const withPreact = require("next-plugin-preact")

module.exports = withPreact(nextConfig)
