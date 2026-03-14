import { ReactNode } from "react";
import { ViewTransitions } from "next-view-transitions";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Footer, Header, Main } from "@/layout";
import type { Viewport } from "next";
import HeaderObserver from "@/layout/header/headerObserver";
import "@/style/globals.css";
import "@/style/markdown.css";
import "kku-ui/index.css";


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#111111",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ViewTransitions>
      <html lang="ko">
        <body>
          <div className="mx-auto flex flex-col min-h-dvh pt-header">
            <HeaderObserver />
            <Header />
            <Main>{children}</Main>
            <Footer />
          </div>
        </body>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
      </html>
    </ViewTransitions>
  );
}
