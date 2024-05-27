import { Suspense, cache } from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { generateMetaTitle, metadata as _metadata } from "@/config/meta";
import ArchiveSidebar from "@/layout/archiveSidebar/archiveSidebar";
import ArchiveContent from "@/layout/archiveContent/archiveContent";
import { isNumber } from "@/utils/string";
import { getNotionPages } from "@/api/notion/page";
import Fallback from "./fallBack";

const metadataTitle = generateMetaTitle("Archive");
export const metadata: Metadata = {
  ..._metadata,
  title: metadataTitle,
  openGraph: { ..._metadata.openGraph, title: metadataTitle },
};

export const revalidate = 60;
const getPages = cache(getNotionPages);

export default async function ArchivePage({ searchParams }: { searchParams: { page: string | undefined } }) {
  const { page } = searchParams;

  // 숫자 형식이 아닌 페이지 사이즈 접근 에러 핸들링(use server)
  if (page !== undefined && !isNumber(page)) {
    redirect("/404");
  }

  const { info, pages } = await getPages();

  return (
    <Suspense fallback={<Fallback />}>
      <aside className="archive__layout__sidebar">
        <ArchiveSidebar info={info} />
      </aside>
      <section className="archive__layout__content">
        <ArchiveContent pages={pages} />
      </section>
    </Suspense>
  );
}
