import NextHead from "@/component/common/seo/DefaultMeta";
import NotionViewer from "@/component/content/notionViewer/notionViewer";
import Comment from "@/component/content/comment/comment";
import ErrorPage from "@/app/404/page";
import { getNotionDetail as _getNotionDetail } from "@/api/notion/page";
import { cache } from "react";
import notion from "@/lib/noiton";
import type { Metadata } from "next";
import { generateMetaTitle, metadata as _metadata } from "@/config/meta";
import config from "@/config/notion.config";

export const revalidate = 60;
const getNotionDetail = cache(_getNotionDetail);

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { title, des, coverUrl } = await getNotionDetail(params.id);
  const metadataTitle = generateMetaTitle(title || "");
  const metadataDescription = des || (process.env.NEXT_PUBLIC_DESCRIPTION as string);
  const metadataImage = coverUrl || config.blog.SITE_IMAGE;

  return {
    ..._metadata,
    title: metadataTitle,
    description: metadataDescription,
    openGraph: {
      ..._metadata.openGraph,
      title: metadataTitle,
      description: metadataDescription,
      images: metadataImage,
    },
    twitter: {
      title: metadataTitle,
      description: metadataDescription,
      images: [metadataImage],
    },
  };
}

export async function generateStaticParams() {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;

  try {
    if (!databaseId) throw new Error("DATABASE_ID is not defined");

    // Get all Post
    const allPages = await notion.getPages(databaseId);
    // Generate all post paths
    const paths = allPages.map(({ id }) => ({ id }));
    console.log(paths);

    return paths;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export default async function ArchiveDetailPage({ params }: { params: { id: string } }) {
  const { title, des, coverUrl, alt, recordMap, error } = await getNotionDetail(params.id);

  const pageCoverUrl = coverUrl || undefined;

  if (error || !recordMap) {
    return <ErrorPage />;
  }

  return (
    <>
      <NextHead title={title} des={des} image={pageCoverUrl} />
      <NotionViewer recordMap={recordMap} coverUrl={pageCoverUrl} alt={alt} />
      <Comment />
    </>
  );
}
