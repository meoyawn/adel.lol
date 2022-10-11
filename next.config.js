/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: false,
  },
  reactStrictMode: true,
  swcMinify: true,
}

const withPreact = require("next-plugin-preact")

module.exports = withPreact(nextConfig)
