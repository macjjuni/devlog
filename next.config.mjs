const nextConfig = {
  sassOptions: {
    // prependData: `@use "@/style/index" as *;`
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "algosaju.app" },
      { protocol: "https", hostname: "www.algosaju.app" },
      { protocol: "https", hostname: "www.only-btc.app" },
      { protocol: "https", hostname: "ez-paint.web.app" },
    ]
  },
  experimental: {
    nextScriptWorkers: true
  }
};

export default nextConfig;
