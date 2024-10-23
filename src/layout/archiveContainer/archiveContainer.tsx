import { memo } from "react";
import ArchiveTitle from "@/component/archive/archiveTitle/archiveTitle";
import ArchiveList from "@/component/archive/archiveList/archiveList";
import Pagination from "@/component/archive/pagination/pagination";
import { NotionPageProps } from "@/@types/notion";

function ArchiveContainer({ pages }: { pages: NotionPageProps[] }) {
  return (
    <>
      <ArchiveTitle pages={pages} />
      <ArchiveList pages={pages} />
      <Pagination total={pages.length} />
    </>
  );
}

export default memo(ArchiveContainer);
