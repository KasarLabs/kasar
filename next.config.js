/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    PUBLIC_STOREFRONT_API_TOKEN: process.env.PUBLIC_STOREFRONT_API_TOKEN,
    INFURA_KEY: process.env.INFURA_KEY,
    QUICKNODE_KEY: process.env.QUICKNODE_KEY,
    CHAINSTACK_KEY: process.env.CHAINSTACK_KEY,
    ALCHEMY_KEY: process.env.ALCHEMY_KEY,
    BLAST_KEY: process.env.BLAST_KEY,
    STARKNODE_KEY: process.env.STARKNODE_KEY,

  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig