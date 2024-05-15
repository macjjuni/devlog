import NextTopLoader, { NextTopLoaderProps } from "nextjs-toploader";

const loaderProps: NextTopLoaderProps = {
  height: 3,
  color: "#fff",
  speed: 240,
  showSpinner: false,
  // crawl: false,
};

function PageLoader() {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <NextTopLoader {...loaderProps} />;
}

export default PageLoader;
