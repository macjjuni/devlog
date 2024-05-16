import Category from "@/component/sidebar/category/category";
import Profile from "@/component/sidebar/profile/profile";
import Search from "@/component/sidebar/search/search";
import ArchiveList from "@/component/archiveList/archiveList";
import Pagination from "@/component/pagination/pagination";
import type { INotionInfo, IPage } from "@/@types/notion";
import { Suspense } from "react";
import Fallback from "./fallBack";

const localDomain = process.env.NEXT_PUBLIC_DOMAIN;
const revalidate = 60;

async function getPosts(): Promise<{ info: INotionInfo; pages: IPage[]; error: boolean }> {
  const res = await fetch(`${localDomain}/api/archive/list`, { next: { revalidate } });

  return res.json();
}

export default async function ArchivePage({ searchParams }: { searchParams: { page: string } }) {
  console.log("searchParams", searchParams.page);
  const { info, pages } = await getPosts();
  // const currentPage = query.page ? parseInt(query.page.toString(), 10) : 1

  return (
    <Suspense fallback={<Fallback />}>
      <section className="archive__layout__sidebar">
        <Profile description={info.description} imageUrl={info.coverURL} />
        <Search />
        <Category list={info.category} />
      </section>
      <section className="archive__layout__content">
        <ArchiveList list={pages} />
        <Pagination current={1} total={pages.length} />
      </section>
    </Suspense>
  );
}
