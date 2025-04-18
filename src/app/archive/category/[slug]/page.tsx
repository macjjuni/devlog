import { Suspense } from "react";
import notion from "@/lib/noiton";
import { redirect } from "next/navigation";
import Fallback from "@/app/archive/fallBack";
import { getNotionCategoryList } from "@/api/notion/page";
import { ArchiveSidebar, ArchiveContent } from "@/layout";
import type { Metadata } from "next";
import { getMetadata } from "@/config/meta";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {

  const resolveParams = await params;
  return getMetadata(`Archive - ${resolveParams.slug}`, null, `archive/${resolveParams.slug}`, null);
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

export const revalidate = 600;
export default async function ArchiveCategoryPage({ params }: { params: Promise<{ slug: string }> }) {

  const resolveParams = await params;
  const { info, pages, error } = await getNotionCategoryList(resolveParams.slug);

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
