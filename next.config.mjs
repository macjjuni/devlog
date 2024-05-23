const nextConfig = {
  sassOptions: {
    includePaths: ["./src", "./src/**/*.scss"],
    prependData: `@import "@/style/index.scss";`
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "www.notion.so", pathname: "/image/**", port: "" }
    ]
  }
};

export default nextConfig;
