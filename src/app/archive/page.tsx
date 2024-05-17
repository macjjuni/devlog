"use server";

import { Suspense } from "react";
import { redirect } from "next/navigation";
import Category from "@/component/sidebar/category/category";
import Profile from "@/component/sidebar/profile/profile";
import Search from "@/component/sidebar/search/search";
import ArchiveList from "@/component/archiveList/archiveList";
import Pagination from "@/component/pagination/pagination";
import type { INotionInfo, IPage } from "@/@types/notion";
import Fallback from "./fallBack";
import { isNumber } from "@/utils/string";

const localDomain = process.env.NEXT_PUBLIC_DOMAIN;
const revalidate = 60;

async function getPosts(): Promise<{ info: INotionInfo; pages: IPage[]; error: boolean }> {
  const res = await fetch(`${localDomain}/api/archive/list`, { next: { revalidate } });

  return res.json();
}

export default async function ArchivePage({ searchParams }: { searchParams: { page: string | undefined } }) {
  // 숫자 형식이 아닌 페이지 사이즈 접근 에러 핸들링(use server)
  if (searchParams.page !== undefined && !isNumber(searchParams.page)) {
    redirect("/404");
  }

  const { info, pages } = await getPosts();

  return (
    <Suspense fallback={<Fallback />}>
      <section className="archive__layout__sidebar">
        <Profile description={info.description} imageUrl={info.coverURL} />
        <Search />
        <Category list={info.category} />
      </section>
      <section className="archive__layout__content">
        <ArchiveList list={pages} />
        <Pagination total={pages.length} />
      </section>
    </Suspense>
  );
}
