import { Suspense } from "react";
import { unstable_cache } from "next/cache";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getMetadata } from "@/config/meta";
import ArchiveSidebar from "@/layout/archiveSidebar/archiveSidebar";
import ArchiveContent from "@/layout/archiveContent/archiveContent";
import { getNotionPages as _getNotionPages } from "@/api/notion/page";
import { isNumber } from "@/utils/string";
import Fallback from "./fallBack";

export const metadata: Metadata = getMetadata("Archive", null, "archive", null);

export const revalidate = 60 * 10;
const getAllPage = unstable_cache(_getNotionPages, ["archive"], { revalidate, tags: ["archive"] });

export default async function ArchivePage({ searchParams }: { searchParams: { page: string | undefined } }) {
  const { page } = searchParams;

  // 숫자 형식이 아닌 페이지 사이즈 접근 에러 핸들링(use server)
  if (page !== undefined && !isNumber(page)) {
    redirect("/404");
  }

  const { info, pages, error } = await getAllPage();

  if (error) {
    redirect("/404");
  }

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
