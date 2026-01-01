import { memo } from "react";
import { ArchiveList, ArchiveTitle, Pagination } from "@/components/archive";
import { NotionPageProps } from "@/@types/notion";

export default function archiveContent({ pages }: { pages: NotionPageProps[] }) {
  return (
    <section className="w-full">
      <ArchiveTitle pages={pages} />
      <ArchiveList pages={pages} />
      <Pagination total={pages.length} />
    </section>
  );
}