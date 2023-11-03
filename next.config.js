/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'www.notion.so',
      's3.us-west-2.amazonaws.com',
      'images.unsplash.com',
      'kku.dev',
      's3-us-west-2.amazonaws.com',
      'github.com',
      'lh3.googleusercontent.com',
      'tistory1.daumcdn.net',
    ],
    images: {
      formats: ['image/webp'],
      minimumCacheTTL: 1000 * 60 * 10,
    },
  },
}

module.exports = nextConfig
