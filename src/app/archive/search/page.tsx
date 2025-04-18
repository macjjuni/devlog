import { Suspense } from "react";
import { redirect } from "next/navigation";
import Fallback from "@/app/archive/fallBack";
import { getNotionSearchPages } from "@/api/notion/page";
import ArchiveSidebar from "@/layout/archiveSidebar/archiveSidebar";
import ArchiveContent from "@/layout/archiveContent/archiveContent";
import type { Metadata } from "next";
import { getMetadata } from "@/config/meta";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ q: string }> }): Promise<Metadata> {

  const resolveSearchParams = await searchParams;
  return getMetadata(`검색: ${resolveSearchParams.q}`, null, `search?q=${resolveSearchParams.q}`, null);
}

export const revalidate = 600;
export default async function ArchiveSearchPage({ searchParams }: { searchParams: Promise<{ q: string }> }) {

  const resolveSearchParams = await searchParams;
  const { info, searchPages, error } = await getNotionSearchPages(resolveSearchParams?.q || "");

  if (error || !info) {
    redirect("/404");
  }

  return (
    <Suspense fallback={<Fallback />}>
      <aside className="archive__layout__sidebar">
        <ArchiveSidebar info={info} />
      </aside>
      <section className="archive__layout__content">
        <ArchiveContent pages={searchPages} />
      </section>
    </Suspense>
  );
}
