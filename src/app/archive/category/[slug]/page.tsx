import { Suspense } from "react";
import notion from "@/lib/noiton";
import { redirect } from "next/navigation";
import Fallback from "@/app/archive/fallBack";
import { getNotionCategoryList } from "@/api/notion/page";
import ArchiveSidebar from "@/layout/archiveSidebar/archiveSidebar";
import ArchiveContent from "@/layout/archiveContent/archiveContent";
import type { Metadata } from "next";
import { getMetadata } from "@/config/meta";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return getMetadata(`Archive - ${params.slug}`, null, `archive/${params.slug}`, null);
}

export async function generateStaticParams() {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;
  try {
    if (!databaseId) {
      throw new Error("DATABASE_ID is undefined.");
    }

    const tempInfo = await notion.getNotionInfo(databaseId);
    const { category } = notion.getParseNotionInfo(tempInfo); // 데이터 가공

    return category?.map(({ name }) => ({ slug: name })) || [];
  } catch (e) {
    console.error(e);

    return [];
  }
}

export const revalidate = 60 * 10;
export default async function ArchiveCategoryPage({ params }: { params: { slug: string } }) {
  const { info, pages, error } = await getNotionCategoryList(params.slug);

  if (error || !info) {
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
