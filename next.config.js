/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  images: {
    domains: ['img1.daumcdn.net', 'www.notion.so', 's3.us-west-2.amazonaws.com', 'images.unsplash.com'],
  },
}

module.exports = nextConfig
