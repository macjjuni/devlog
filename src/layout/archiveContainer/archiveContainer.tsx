import ArchiveTitle from "@/component/archive/archiveTitle/archiveTitle";
import ArchiveList from "@/component/archive/archiveList/archiveList";
import Pagination from "@/component/archive/pagination/pagination";
import { ArchiveData } from "@/@types/archive";

export default function ArchiveContainer({ archives }: { archives: ArchiveData[] }) {
  return (
    <section className="archive__layout__content">
      <ArchiveTitle archives={archives} />
      <ArchiveList archives={archives} />
      <Pagination total={archives.length} />
    </section>
  );
}
