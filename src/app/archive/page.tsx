import { ArchiveLayoutContent, ArchiveLayoutSidebar } from "@/app/archive/layout";
import Category from "@/component/sidebar/category/category";
import Profile from "@/component/sidebar/profile/profile";
import Search from "@/component/sidebar/search/search";
import ArchiveList from "@/component/archiveList/archiveList";
import notion from "@/lib/noiton";
import type { INotionInfo, IPage } from "@/@types/notion";

async function getPosts(): Promise<{ info: INotionInfo; pages: IPage[]; error: boolean }> {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;

  try {
    if (!databaseId) throw new Error("DATABASE_ID is undefined.");
    const tempInfo = await notion.getNotionInfo(databaseId);
    const info = notion.getParseNotionInfo(tempInfo); // 데이터 가공
    const pages = await notion.getAllPage(databaseId);

    return { info, pages, error: false };
  } catch (e) {
    return {
      info: { title: "Not Found", description: "Not Found", category: [], icon: "", tags: null, coverURL: null },
      pages: [],
      error: true,
    };
  }
}

export default async function ArchivePage() {
  const { info, pages } = await getPosts();
  console.log(info);

  return (
    <>
      <ArchiveLayoutSidebar>
        <Profile description={info.description} imageUrl={info.coverURL} />
        <Search />
        <Category list={info.category} />
      </ArchiveLayoutSidebar>
      <ArchiveLayoutContent>
        <ArchiveList list={pages} />
      </ArchiveLayoutContent>
    </>
  );
}
