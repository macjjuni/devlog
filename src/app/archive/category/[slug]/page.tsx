import { Suspense } from "react";
import Fallback from "@/app/archive/fallBack";
import ArchiveSidebar from "@/layout/archiveSidebar/archiveSidebar";
import ArchiveContent from "@/layout/archiveContent/archiveContent";
import type { Metadata } from "next";
import { getMetadata } from "@/config/meta";
import { getCategoryArchive, getCategoryList } from "@/utils/archive";
import { useSearchParamsPage } from "@/hook";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return getMetadata(`Archive - ${params.slug}`, null, `archive/${params.slug}`, null);
}

export async function generateStaticParams() {
  try {
    const categoryList = await getCategoryList();
    return categoryList?.map((item) => ({ slug: item })) || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function getArchivesByCategory(slug: string, page?: number) {
  const { archives, totalLength } = await getCategoryArchive(slug, page);

  return { archives, totalLength };
}

async function getArchiveCategories(isContainAll: boolean) {
  return getCategoryList(isContainAll);
}

interface ArchiveCategoryPageProps {
  params: { slug: string };
  searchParams: { page: string | undefined };
}

export default async function ArchiveCategoryPage({ params, searchParams }: ArchiveCategoryPageProps) {
  const page = await useSearchParamsPage(searchParams);

  try {
    const { archives, totalLength } = await getArchivesByCategory(params.slug, page);
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
