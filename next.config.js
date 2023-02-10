/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  images: {
    domains: ['img1.daumcdn.net'],
  },
}

module.exports = nextConfig
