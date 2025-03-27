import { memo } from "react";
import { ArchiveList, ArchiveTitle, Pagination } from "@/components/archive";
import { NotionPageProps } from "@/@types/notion";

function archiveContent({ pages }: { pages: NotionPageProps[] }) {
  return (
    <>
      <ArchiveTitle pages={pages} />
      <ArchiveList pages={pages} />
      <Pagination total={pages.length} />
    </>
  );
}

export default memo(archiveContent);
