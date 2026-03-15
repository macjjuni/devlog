import Search from "@/components/sidebar/Search";
import Category from "@/components/sidebar/Category";
import type { BlogInfo } from "@/@types/post";

export default function ArchiveSidebar({ info }: { info: BlogInfo }) {
  return (
    <aside className="flex flex-shrink-0 w-[280px] flex-col gap-4 tablet:w-full mobile:w-full">
      <Category categories={info?.categories ?? []} />
      <Search />
    </aside>
  );
}
