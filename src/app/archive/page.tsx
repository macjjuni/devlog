import { Suspense } from "react";
import { unstable_cache } from "next/cache";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getMetadata } from "@/config/meta";
import ArchiveSidebar from "@/layout/archiveSidebar/archiveSidebar";
import ArchiveContent from "@/layout/archiveContent/archiveContent";
import { getNotionPages as _getNotionPages } from "@/api/notion/page";
import { NotionInfoProps, NotionPageProps } from "@/@types/notion";
import { isNumber } from "@/utils/string";
import Fallback from "./fallBack";

export const metadata: Metadata = getMetadata("Archive", null, "archive", null);

export const revalidate = 60 * 10;
const getAllPage = unstable_cache(_getNotionPages, ["archive"], { revalidate, tags: ["archive"] });

let backupPages = [] as NotionPageProps[];
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
let backupInfo = null as NotionInfoProps | null;

export default async function ArchivePage({ searchParams }: { searchParams: { page: string | undefined } }) {
  const { page } = searchParams;

  // 숫자 형식이 아닌 페이지 사이즈 접근 에러 핸들링(use server)
  if (page !== undefined && !isNumber(page)) {
    redirect("/404");
  }

  const { info, pages, error } = await getAllPage();

  // 에러가 아닌경우 백업
  if (!error) {
    backupInfo = info;
    backupPages = [...pages];
  }

  if (error) {
    if (backupPages.length > 0) { return; }
    redirect("/404");
  }

  const sanitisedPage = pages.length ? pages : backupPages;

  return (
    <Suspense fallback={<Fallback />}>
      <aside className="archive__layout__sidebar">
        <ArchiveSidebar info={info} />
      </aside>
      <section className="archive__layout__content">
        <ArchiveContent pages={sanitisedPage} />
      </section>
    </Suspense>
  );
}
