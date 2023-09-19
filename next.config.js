/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['www.notion.so', 's3.us-west-2.amazonaws.com', 'images.unsplash.com', 'kku.dev', 's3-us-west-2.amazonaws.com', 'github.com'],
  },
}

module.exports = nextConfig
