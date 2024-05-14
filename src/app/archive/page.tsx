import { ArchiveLayoutContent, ArchiveLayoutSidebar } from "@/app/archive/layout";
import Category from "@/component/sidebar/category/category";
import Profile from "@/component/sidebar/profile/profile";
import Search from "@/component/sidebar/search/search";
import ArchiveList from "@/component/archiveList/archiveList";
import type { INotionInfo, IPage } from "@/@types/notion";
import { Suspense } from "react";
import Fallback from "./fallBack";

const localDomain = process.env.NEXT_PUBLIC_DOMAIN;
const revalidate = 60;

async function getPosts(): Promise<{ info: INotionInfo; pages: IPage[]; error: boolean }> {
  const res = await fetch(`${localDomain}/api/archive/list`, { next: { revalidate } });

  return res.json();
}

export default async function ArchivePage() {
  const { info, pages } = await getPosts();

  return (
    <Suspense fallback={<Fallback />}>
      <ArchiveLayoutSidebar>
        <Profile description={info.description} imageUrl={info.coverURL} />
        <Search />
        <Category list={info.category} />
      </ArchiveLayoutSidebar>
      <ArchiveLayoutContent>
        <ArchiveList list={pages} />
      </ArchiveLayoutContent>
    </Suspense>
  );
}
