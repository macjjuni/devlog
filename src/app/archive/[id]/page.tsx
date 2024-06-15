import NotionViewer from "@/component/archiveContent/notionViewer/notionViewer";
import ArchiveComment from "@/component/archiveContent/archiveComment/archiveComment";
import ErrorPage from "@/app/404/page";
import { getNotionDetail as _getNotionDetail } from "@/api/notion/page";
import { cache } from "react";
import notion from "@/lib/noiton";
import type { Metadata } from "next";
import { getMetadata } from "@/config/meta";

export const revalidate = 60;
const getNotionDetail = cache(_getNotionDetail);

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { title, des, coverUrl } = await getNotionDetail(params.id);

  return getMetadata(title, des, `archive/${params.id}`, coverUrl);
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
  const { coverUrl, alt, recordMap, error } = await getNotionDetail(params.id);

  const pageCoverUrl = coverUrl || undefined;

  if (error || !recordMap) {
    return <ErrorPage />;
  }

  return (
    <>
      <NotionViewer recordMap={recordMap} coverUrl={pageCoverUrl} alt={alt} />
      <ArchiveComment />
    </>
  );
}
