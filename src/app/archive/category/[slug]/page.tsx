import React, { Suspense } from "react";
import notion from "@/lib/noiton";
import { redirect } from "next/navigation";
import Fallback from "@/app/archive/fallBack";
import Profile from "@/component/sidebar/profile/profile";
// import Search from "@/component/sidebar/search/search";
import Category from "@/component/sidebar/category/category";
import ArchiveList from "@/component/content/archiveList/archiveList";
import Pagination from "@/component/content/pagination/pagination";

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

const localDomain = process.env.NEXT_PUBLIC_DOMAIN;
const revalidate = 60;

export async function getCategoryPosts(categoryName: string) {
  const res = await fetch(`${localDomain}/api/archive/category?name=${categoryName}`, { next: { revalidate } });
  return res.json();
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const { info, pages, error } = await getCategoryPosts(params.slug);

  if (error) {
    redirect("/404");
  }

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
