const nextConfig = {
  sassOptions: {
    // prependData: `@use "@/style/index" as *;`
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ]
  },
  experimental: {
    nextScriptWorkers: true
  }
};

export default nextConfig;
