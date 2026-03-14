import Profile from "@/components/sidebar/profile";
import Search from "@/components/sidebar/search";
import type { BlogInfo } from "@/@types/post";

export default function ArchiveSidebar({ info }: { info: BlogInfo }) {
  return (
    <aside className="flex max-w-sidebar w-full flex-col gap-4">
      <Profile description={info?.description} />
      <Search />
    </aside>
  );
}
