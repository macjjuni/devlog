import { Suspense } from "react";
import Fallback from "@/app/archive/fallBack";
import ArchiveSidebar from "@/layout/archiveSidebar/archiveSidebar";
import ArchiveContent from "@/layout/archiveContent/archiveContent";
import type { Metadata } from "next";
import { getMetadata } from "@/config/meta";
import request from "@/utils/request";
import { ArchivesByTitleResponse } from "@/app/api/archive/search/[slug]/list/route";

export async function generateMetadata({ searchParams }: { searchParams: { q: string } }): Promise<Metadata> {
  return getMetadata(`검색: ${searchParams.q}`, null, `search?q=${searchParams.q}`, null);
}

const archivesByTitle = (name: string, page?: string) => `${process.env.NEXT_PUBLIC_DOMAIN}/api/archive/search/${encodeURIComponent(name)}/list?page=${page || 1}`;

export default async function ArchiveSearchPage({ searchParams }: { searchParams: { q: string; page: string; } }) {
  const searchKeyword = searchParams?.q || "";

  const { archives, totalLength } = await request<ArchivesByTitleResponse>(archivesByTitle(searchKeyword, searchParams?.page));

  return (
    <Suspense fallback={<Fallback />}>
      <ArchiveSidebar />
      <ArchiveContent archives={archives} totalLength={totalLength} />
    </Suspense>
  );
}
