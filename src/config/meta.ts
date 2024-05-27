import type { Metadata } from "next";
import config from "@/config/notion.config";

export function generateMetaTitle(subTitle: string) {
  return `${process.env.NEXT_PUBLIC_TITLE} :: ${subTitle}`;
}

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_TITLE,
  description: process.env.NEXT_PUBLIC_DESCRIPTION,
  openGraph: {
    title: process.env.NEXT_PUBLIC_TITLE,
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    url: process.env.NEXT_PUBLIC_DOMAIN,
    siteName: process.env.NEXT_PUBLIC_TITLE,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN}${config.blog.SITE_IMAGE}`,
        width: 800,
        height: 600,
      },
    ],
    locale: "ko",
    type: "website",
  },
  twitter: {
    title: process.env.NEXT_PUBLIC_TITLE,
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    images: process.env.NEXT_PUBLIC_TITLE,
  },
};
