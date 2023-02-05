/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['img1.daumcdn.net'],
  },
}

module.exports = nextConfig
