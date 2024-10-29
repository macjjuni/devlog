import ArchiveHeader from "@/component/archive/archiveHeader/archiveHeader";
import ArchiveContent from "@/component/archive/archiveContent/ArchiveContent";
import ArchiveComment from "@/component/archive/archiveComment/archiveComment";
import { mdxSerializer } from "@/lib/mdx";
import ErrorPage from "@/app/404/page";
import { getAllArchivePath, getArchiveSource } from "@/utils/archive";
import { ArchiveData } from "@/@types/archive";
import ArchiveToc from "@/component/archive/archiveToc/archiveToc";

export async function generateStaticParams() {
  const allArchivePath = await getAllArchivePath();

  return allArchivePath.map((archivePath) => ({ id: archivePath }));
}

async function readArchiveDetail(id: string): Promise<string | null> {
  return getArchiveSource(id);
}

export default async function ArchiveDetailPage({ params }: { params: { id: string } }) {
  const source = await readArchiveDetail(params.id);

  if (!source) { return <ErrorPage />; }

  const archiveMdxSource = await mdxSerializer(source); // MD 직렬화
  const archiveData = archiveMdxSource.frontmatter as unknown as ArchiveData;

  return (
    <>
      <ArchiveHeader archiveData={archiveData} />
      <ArchiveContent source={archiveMdxSource}>
        <ArchiveToc source={source} />
      </ArchiveContent>
      <ArchiveComment />
    </>
  );
}
