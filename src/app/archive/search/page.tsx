import { Suspense } from "react";
import { redirect } from "next/navigation";
import Fallback from "@/app/archive/fallBack";
import { getSearchResults } from "@/api/posts";
import ArchiveSidebar from "@/layout/archiveSidebar";
import ArchiveContent from "@/layout/archiveContent";
import type { Metadata } from "next";
import { getMetadata } from "@/config/meta";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ q: string }> }): Promise<Metadata> {
  const resolveSearchParams = await searchParams;
  return getMetadata(`검색: ${resolveSearchParams.q}`, null, `search?q=${resolveSearchParams.q}`, null);
}

export const revalidate = 600;
export default async function ArchiveSearchPage({ searchParams }: { searchParams: Promise<{ q: string }> }) {
  const resolveSearchParams = await searchParams;
  const { info, searchPages, error } = await getSearchResults(resolveSearchParams?.q || "");

  if (error || !info) {
    redirect("/404");
  }

  return (
    <Suspense fallback={<Fallback />}>
      <ArchiveSidebar info={info} />
      <section className="archive__layout__content">
        <ArchiveContent pages={searchPages} />
      </section>
    </Suspense>
  );
}
