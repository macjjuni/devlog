
const nextConfig = {
  sassOptions: {
    includePaths: ['./src', './src/**/*'],
    prependData: `@import "@/style/index.scss";`,
  },
};

export default nextConfig;
