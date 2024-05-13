const nextConfig = {
  sassOptions: {
    includePaths: ["./src", "./src/**/*"],
    prependData: `@import "@/style/index.scss";`
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "pbs.twimg.com" }
    ]
  }
};

export default nextConfig;
