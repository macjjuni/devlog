import type { Metadata } from "next";
import { ArchiveComment, NotionViewer } from "@/components/archive";
import ErrorPage from "@/app/404/page";
import { getNotionDetail } from "@/api/notion/page";
import notion from "@/lib/noiton";
import { getMetadata } from "@/config/meta";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {

  const resolveParams = await params;
  const { title, des, coverUrl } = await getNotionDetail(resolveParams.id);

  return getMetadata(title, des, `archive/${resolveParams.id}`, coverUrl);
}

export async function generateStaticParams() {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;

  if (!databaseId) {
    throw new Error("DATABASE_ID is not defined");
  }

  try {
    // Get all Post
    const allPages = await notion.getPages(databaseId);
    // Generate all post paths
    return allPages.map(({ id }) => ({ id }));
  } catch (e) {
    console.error(e);
    return [];
  }
}

export default async function ArchiveDetailPage({ params }: { params: Promise<{ id: string }> }) {

  const resolvedParams = await params;
  const { coverUrl, alt, recordMap, error } = await getNotionDetail(resolvedParams.id);
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
