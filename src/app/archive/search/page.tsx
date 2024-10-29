import { Suspense } from "react";
import Fallback from "@/app/archive/fallBack";
import ArchiveSidebar from "@/layout/archiveSidebar/archiveSidebar";
import ArchiveContent from "@/layout/archiveContent/archiveContent";
import type { Metadata } from "next";
import { getMetadata } from "@/config/meta";
import { useSearchParamsPage } from "@/hook";
import { SearchParamsProps } from "@/hook/server/useSearchParamsPage";
import { getCategoryList, getSearchArchive } from "@/utils/archive";

export async function generateMetadata({ searchParams }: { searchParams: { q: string } }): Promise<Metadata> {
  return getMetadata(`검색: ${searchParams.q}`, null, `search?q=${searchParams.q}`, null);
}

async function readSearchArchives(keyword: string, page?: number) {
  return getSearchArchive(keyword, page);
}

async function getArchiveCategories(isContainAll: boolean) {
  return getCategoryList(isContainAll);
}

interface SearchPageSearchParamsProps extends SearchParamsProps {
  q: string;
}

export default async function ArchiveSearchPage({ searchParams }: { searchParams: SearchPageSearchParamsProps }) {
  const page = await useSearchParamsPage(searchParams);
  const searchKeyword = searchParams?.q || "";

  try {
    const { archives, totalLength } = await readSearchArchives(searchKeyword, page);
    const categories = await getArchiveCategories(true);

    return (
      <Suspense fallback={<Fallback />}>
        <ArchiveSidebar categories={categories} />
        <ArchiveContent archives={archives} totalLength={totalLength} />
      </Suspense>
    );
  } catch (error) {
    console.error(error);
  }
}
