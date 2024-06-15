import React, { ReactNode } from "react";
import type { Viewport } from "next";
import { Footer, Header, Main } from "@/layout";
import { GoogleAnalytics } from "@next/third-parties/google";
import SplineWrapper from "@/component/aboutContent/spline/spline";
import PageLoader from "@/component/common/pageLoader/pageLoader";
import HeaderObserver from "@/layout/header/headerObserver";
import "./layout.scss";
import "kku-ui/lib/styles/index.css";

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
