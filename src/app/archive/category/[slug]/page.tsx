import { Suspense } from "react";
import { redirect } from "next/navigation";
import Fallback from "@/app/archive/fallBack";
import ArchiveSidebar from "@/layout/archiveSidebar/archiveSidebar";
import ArchiveContent from "@/layout/archiveContainer/archiveContainer";
import type { Metadata } from "next";
import { getMetadata } from "@/config/meta";
import { getCategoryArchive, getCategoryList } from "@/utils/archive";

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

export default async function ArchiveCategoryPage({ params }: { params: { slug: string } }) {

  const archives = await getCategoryArchive(params.slug);

  if (!archives) {
    redirect("/404");
  }

  return (
    <Suspense fallback={<Fallback />}>
      <ArchiveSidebar />
      <ArchiveContent archives={archives} />
    </Suspense>
  );
}
