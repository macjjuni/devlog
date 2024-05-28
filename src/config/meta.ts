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
    card: "summary_large_image",
    title: process.env.NEXT_PUBLIC_TITLE,
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    images: [process.env.NEXT_PUBLIC_TITLE as string],
  },
};

type MetadataPropsType = string | undefined | null;

const defaultTitle = process.env.NEXT_PUBLIC_TITLE as string;
const defaultDescription = process.env.NEXT_PUBLIC_DESCRIPTION as string;
const defaultPageUrl = process.env.NEXT_PUBLIC_DOMAIN as string;
const defaultImageUrl = `${process.env.NEXT_PUBLIC_DOMAIN}${config.blog.SITE_IMAGE}`;

export function getMetadata(_title: MetadataPropsType, _description: MetadataPropsType, _pageUrl: MetadataPropsType, _imageUrl: MetadataPropsType): Metadata {
  const title = _title ? generateMetaTitle(_title) : defaultTitle ;
  const description = _description || defaultDescription;
  const pageUrl = new URL(_pageUrl ? `${process.env.NEXT_PUBLIC_DOMAIN}/${_pageUrl}` : defaultPageUrl);
  const imageUrl = _imageUrl || defaultImageUrl;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: title,
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
        },
      ],
      locale: "ko",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
