import ArchiveTitle from "@/component/archive/archiveTitle/archiveTitle";
import ArchiveList from "@/component/archive/archiveList/archiveList";
import Pagination from "@/component/archive/pagination/pagination";
import { ArchiveData } from "@/@types/archive";

interface ArchiveContainerProps {
  archives: ArchiveData[];
  totalLength: number;
}

export default function ArchiveContent({ archives, totalLength }: ArchiveContainerProps) {

  return (
    <section className="archive__layout__content">
      <ArchiveTitle totalLength={totalLength} />
      <ArchiveList archives={archives} />
      <Pagination total={totalLength} />
    </section>
  );
}
