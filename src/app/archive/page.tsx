import { Suspense } from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getMetadata } from "@/config/meta";
import ArchiveSidebar from "@/layout/archiveSidebar/archiveSidebar";
import ArchiveContent from "@/layout/archiveContent/archiveContent";
import { getAllArchiveList, getCategoryList } from "@/utils/archive";
import { useSearchParamsPage } from "@/hook";
import { SearchParamsProps } from "@/hook/server/useSearchParamsPage";
import Fallback from "./fallBack";

export const metadata: Metadata = getMetadata("Archive", null, "archive", null);

async function getArchives(page?: number, pageSize?: number) {
  const { archives, totalLength } = await getAllArchiveList(page, pageSize);

  return { archives, totalLength };
}

async function getArchiveCategories(isContainAll: boolean) {
  return getCategoryList(isContainAll);
}

export default async function ArchivePage({ searchParams }: { searchParams: SearchParamsProps }) {
  const page = await useSearchParamsPage(searchParams);

  try {
    const { archives, totalLength } = await getArchives(page);
    const categories = await getArchiveCategories(true);

    return (
      <Suspense fallback={<Fallback />}>
        <ArchiveSidebar categories={categories} />
        <ArchiveContent archives={archives} totalLength={totalLength} />
      </Suspense>
    );
  } catch (error) {
    console.error(error);
    redirect("/404");
  }
}
