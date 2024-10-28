import { Suspense } from "react";
import { redirect } from "next/navigation";
import Fallback from "@/app/archive/fallBack";
import ArchiveSidebar from "@/layout/archiveSidebar/archiveSidebar";
import ArchiveContent from "@/layout/archiveContent/archiveContent";
import type { Metadata } from "next";
import { getMetadata } from "@/config/meta";
import { getCategoryList } from "@/utils/archive";
import request from "@/utils/request";
import { ArchivesByCategoryResponse } from "@/app/api/archive/category/[slug]/list/route";

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

interface ArchiveCategoryPageProps {
  params: { slug: string; page: string };
  searchParams: { page: string | undefined };
}

const archiveByCategoryUrl = (name: string, page?: string) => `${process.env.NEXT_PUBLIC_DOMAIN}/api/archive/category/${encodeURIComponent(name)}/list?page=${page || 1}`;

export default async function ArchiveCategoryPage({ params, searchParams }: ArchiveCategoryPageProps) {
  const { archives, totalLength } = await request<ArchivesByCategoryResponse>(archiveByCategoryUrl(params.slug, searchParams?.page));

  if (!archives) {
    redirect("/404");
  }

  return (
    <Suspense fallback={<Fallback />}>
      <ArchiveSidebar />
      <ArchiveContent archives={archives} totalLength={totalLength} />
    </Suspense>
  );
}
