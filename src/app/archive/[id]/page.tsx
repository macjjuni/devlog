import type { ExtendedRecordMap } from "notion-types";
import NextHead from "@/component/common/seo/DefaultMeta";
import NotionViewer from "@/component/content/notionViewer/notionViewer";
import Comment from "@/component/content/comment/comment";
import ErrorPage from "@/app/404/page";
import { getNotionDetail as _getNotionDetail } from "@/api/notion/page";
import { cache } from "react";

interface ArchiveDetailPageProps {
  params: { id: string };
}

export interface IPost {
  recordMap: ExtendedRecordMap;
  title: string;
  des: string;
  coverUrl: string | null;
  alt: string;
  error: boolean;
}

export const revalidate = 60;
const getNotionDetail = cache(_getNotionDetail);

export default async function ArchiveDetailPage({ params }: ArchiveDetailPageProps) {
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
