import { ArchiveList, ArchiveTitle, Pagination } from "@/components/archive";
import type { PostMeta } from "@/@types/post";

export default function archiveContent({ pages }: { pages: PostMeta[] }) {
  return (
    <section className="w-full">
      <ArchiveTitle pages={pages} />
      <ArchiveList pages={pages} />
      <Pagination total={pages.length} />
    </section>
  );
}
