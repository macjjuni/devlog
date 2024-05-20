import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Header, Main, Footer } from "@/layout";
import SplineWrapper from "@/component/content/spline/spline";
import PageLoader from "@/component/common/pageLoader/pageLoader";
import "./layout.scss";
import "kku-ui/lib/styles/index.css";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_TITLE,
  description: process.env.NEXT_PUBLIC_DESCRIPTION,
};
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
