import type { ExtendedRecordMap } from "notion-types";
import NextHead from "@/component/common/seo/DefaultMeta";
import NotionViewer from "@/component/content/notionViewer/notionViewer";
import ErrorPage from "@/app/404/page";

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

const localDomain = process.env.NEXT_PUBLIC_DOMAIN;
const revalidate = 60;

async function getArchiveDetail(id: string): Promise<IPost> {
  const res = await fetch(`${localDomain}/api/archive?id=${id}`, { next: { revalidate } });

  return res.json();
}

export default async function ArchiveDetailPage({ params }: ArchiveDetailPageProps) {
  const { title, des, coverUrl, alt, recordMap, error } = await getArchiveDetail(params.id);

  const pageCoverUrl = coverUrl || undefined;

  if (error) {
    return <ErrorPage/>;
  }

  return (
    <>
      <NextHead title={title} des={des} image={pageCoverUrl} />
      <NotionViewer recordMap={recordMap} coverUrl={pageCoverUrl} alt={alt} />
      {/* <Comment /> */}
    </>
  );
}
