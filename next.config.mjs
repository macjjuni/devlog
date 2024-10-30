import withBundleAnalyzer from "@next/bundle-analyzer";

const isAnalyze = process.env.ANALYZE === 'true';
const analyzer = withBundleAnalyzer({ enabled: isAnalyze, openAnalyzer: isAnalyze });

const nextConfig = {
  sassOptions: {
    includePaths: ["./src", "./src/**/*.scss"],
    prependData: `@import "@/style/index.scss";`
  },
  transpilePackages: ['next-mdx-remote'],
};

export default analyzer(nextConfig);
