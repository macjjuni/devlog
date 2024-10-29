import withBundleAnalyzer from "@next/bundle-analyzer";

const isAnalyze = process.env.ANALYZE === 'true';
const analyzer = withBundleAnalyzer({ enabled: isAnalyze, openAnalyzer: isAnalyze });

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
  },
  transpilePackages: ['next-mdx-remote'],
};

export default analyzer(nextConfig);
