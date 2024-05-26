import React, { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Header, Main, Footer } from "@/layout";
import SplineWrapper from "@/component/content/spline/spline";
import PageLoader from "@/component/common/pageLoader/pageLoader";
import { metadata as _metadata } from "@/utils/meta";
import "./layout.scss";
import "kku-ui/lib/styles/index.css";
import HeaderObserver from "@/layout/header/headerObserver";

export const metadata: Metadata = _metadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
    </html>
  );
}
