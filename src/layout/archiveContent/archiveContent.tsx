import { memo } from "react";
import ArchiveTitle from "@/component/archiveContent/archiveTitle/archiveTitle";
import ArchiveList from "@/component/archiveContent/archiveList/archiveList";
import Pagination from "@/component/archiveContent/pagination/pagination";
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
