import { Suspense, cache } from "react";
import { redirect } from "next/navigation";
import Category from "@/component/sidebar/category/category";
import Profile from "@/component/sidebar/profile/profile";
// import Search from "@/component/sidebar/search/search";
import ArchiveList from "@/component/content/archiveList/archiveList";
import Pagination from "@/component/content/pagination/pagination";
import { isNumber } from "@/utils/string";
import { getNotionPages } from "@/api/notion/page";
import Fallback from "./fallBack";

export const revalidate = 60;
const getPages = cache(getNotionPages);

export default async function ArchivePage({ searchParams }: { searchParams: { page: string | undefined } }) {
  const { page } = searchParams;

  // 숫자 형식이 아닌 페이지 사이즈 접근 에러 핸들링(use server)
  if (page !== undefined && !isNumber(page)) {
    redirect("/404");
  }

  const { info, pages } = await getPages();

  return (
    <Suspense fallback={<Fallback />}>
      <aside className="archive__layout__sidebar">
        <Profile description={info.description} imageUrl={info.coverURL} />
        {/* TODO. 검색 기능 개발 해야함! */}
        {/* <Search /> */}
        <Category list={info.category} />
      </aside>
      <section className="archive__layout__content">
        <ArchiveList list={pages} />
        <Pagination total={pages.length} />
      </section>
    </Suspense>
  );
}
