import type { Metadata } from "next";
import { notFound } from "next/navigation"; // 1. notFound 임포트
import { ArchiveComment, NotionViewer } from "@/components/archive";
import { getNotionDetail } from "@/api/notion/page";
import notion from "@/lib/noiton";
import { getMetadata } from "@/config/meta";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const { title, des, coverUrl } = await getNotionDetail(id);

  return getMetadata(title, des, `archive/${id}`, coverUrl);
}

export async function generateStaticParams() {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;
  if (!databaseId) throw new Error("DATABASE_ID is not defined");

  try {
    const allPages = await notion.getPages(databaseId);
    return allPages.map(({ id }) => ({ id }));
  } catch (e) {
    console.error(e);
    return [];
  }
}

export default async function ArchiveDetailPage({ params }: { params: Promise<{ id: string }> }) {

  // region [Hooks]
  const { id } = await params;
  const { coverUrl, alt, recordMap, error } = await getNotionDetail(id);
  // endregion

  if (error || !recordMap) {
    notFound();
  }

  return (
    <>
      <NotionViewer recordMap={recordMap} coverUrl={coverUrl || undefined} alt={alt} />
      <ArchiveComment />
    </>
  );
}
