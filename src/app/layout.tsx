import React, { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Footer, Header, Main } from "@/layout";
import SplineWrapper from "@/components/about/spline/spline";
import PageLoader from "@/components/common/pageLoader/pageLoader";
import HeaderObserver from "@/layout/header/headerObserver";
import "kku-ui/lib/styles/index.css";
import "@/style/index.scss";
import "./layout.scss";
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#111111",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <PageLoader />
        <div className="kku__body__wrapper">
          <HeaderObserver />
          <Header />
          <Main>
            <SplineWrapper />
            {children}
          </Main>
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
    </html>
  );
}
