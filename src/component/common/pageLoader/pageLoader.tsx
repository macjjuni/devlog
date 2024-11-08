import NextTopLoader, { NextTopLoaderProps } from "nextjs-toploader";

const loaderProps: NextTopLoaderProps = {
  height: 3,
  color: "#fff",
  speed: 240,
  showSpinner: false,
};

export default function PageLoader() {
  return <NextTopLoader {...loaderProps} />;
}
