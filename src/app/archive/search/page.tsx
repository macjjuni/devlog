import { Suspense } from "react";
import Fallback from "@/app/archive/fallBack";
import ArchiveSidebar from "@/layout/archiveSidebar/archiveSidebar";
import ArchiveContent from "@/layout/archiveContainer/archiveContainer";
import type { Metadata } from "next";
import { getMetadata } from "@/config/meta";
import { getSearchArchive } from "@/utils/archive";

export async function generateMetadata({ searchParams }: { searchParams: { q: string } }): Promise<Metadata> {
  return getMetadata(`검색: ${searchParams.q}`, null, `search?q=${searchParams.q}`, null);
}

export default async function ArchiveSearchPage({ searchParams }: { searchParams: { q: string } }) {
  const searchKeyword = searchParams?.q || "";
  const archives = await getSearchArchive(searchKeyword);

  return (
    <Suspense fallback={<Fallback />}>
      <ArchiveSidebar />
      <ArchiveContent archives={archives} />
    </Suspense>
  );
}
