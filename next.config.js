/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    PUBLIC_STOREFRONT_API_TOKEN: process.env.PUBLIC_STOREFRONT_API_TOKEN,
    NEXT_PUBLIC_INFURA_KEY: process.env.NEXT_PUBLIC_INFURA_KEY,
    NEXT_PUBLIC_QUICKNODE_KEY: process.env.NEXT_PUBLIC_QUICKNODE_KEY,
    NEXT_PUBLIC_CHAINSTACK_KEY: process.env.NEXT_PUBLIC_CHAINSTACK_KEY,
    NEXT_PUBLIC_ALCHEMY_KEY: process.env.NEXT_PUBLIC_ALCHEMY_KEY,
    NEXT_PUBLIC_BLAST_KEY: process.env.NEXT_PUBLIC_BLAST_KEY,
    NEXT_PUBLIC_STARKNODE_KEY: process.env.NEXT_PUBLIC_STARKNODE_KEY,
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,

  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig