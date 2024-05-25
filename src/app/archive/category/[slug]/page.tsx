import { cache, Suspense } from "react";
import notion from "@/lib/noiton";
import { redirect } from "next/navigation";
import Fallback from "@/app/archive/fallBack";
import { getNotionCategoryList as _getNotionCategoryList } from "@/api/notion/page";
import ArchiveSidebar from "@/layout/archiveSidebar/archiveSidebar";
import ArchiveContent from "@/layout/archiveContent/archiveContent";
import ArchiveSearchPage from "@/app/archive/search/page";

export async function generateStaticParams() {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;
  try {
    if (!databaseId) {
      throw new Error("DATABASE_ID is undefined.");
    }

    const tempInfo = await notion.getNotionInfo(databaseId);
    const { category } = notion.getParseNotionInfo(tempInfo); // 데이터 가공

    return category?.map(({ name }) => ({ slug: name }));
  } catch (e) {
    console.error(e);

    return { paths: [], fallback: false };
  }
}

export const revalidate = 60;
const getCategoryList = cache(_getNotionCategoryList);

export default async function ArchiveCategoryPage({ params }: { params: { slug: string } }) {
  const { info, pages, error } = await getCategoryList(params.slug);

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
