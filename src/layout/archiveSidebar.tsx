import Profile from "@/components/sidebar/profile";
import Search from "@/components/sidebar/search";
import Category from "@/components/sidebar/category/category";
import { NotionInfoProps } from "@/@types/notion";

export default function ArchiveSidebar({ info }: { info: NotionInfoProps }) {
  return (
    <aside className="flex max-w-sidebar w-full flex-col gap-4">
      <Profile description={info?.description} imageUrl={info?.coverURL} />
      <Search />
      <Category list={info?.category} />
    </aside>
  );
}