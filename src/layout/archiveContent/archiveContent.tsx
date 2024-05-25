import { memo } from "react";
import ArchiveTitle from "@/component/content/archiveTitle/archiveTitle";
import ArchiveList from "@/component/content/archiveList/archiveList";
import Pagination from "@/component/content/pagination/pagination";
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
