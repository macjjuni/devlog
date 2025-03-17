const nextConfig = {
  sassOptions: {
    // prependData: `@use "@/style/index" as *;`
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "www.notion.so", pathname: "/image/**", port: "" }
    ]
  },
  experimental: {
    nextScriptWorkers: true
  }
};

export default nextConfig;
