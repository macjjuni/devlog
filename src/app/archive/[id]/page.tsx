import ArchiveHeader from "@/component/archive/archiveHeader/archiveHeader";
import ArchiveContent from "@/component/archive/archiveContent/ArchiveContent";
import ArchiveComment from "@/component/archive/archiveComment/archiveComment";
import { mdxSerializer } from "@/lib/mdx";
import ErrorPage from "@/app/404/page";
import { getAllArchivePath, getArchivePath } from "@/utils/archive";
import { ArchiveData } from "@/@types/archive";
import ArchiveToc from "@/component/archive/archiveToc/archiveToc";

export async function generateStaticParams() {
  const allArchivePath = await getAllArchivePath();

  return allArchivePath.map((archivePath) => ({ id: archivePath }));
}

export default async function ArchiveDetailPage({ params }: { params: { id: string } }) {
  const archiveSource = await getArchivePath(params.id);

  if (!archiveSource) {
    return <ErrorPage />;
  }

  const archiveMdxSource = await mdxSerializer(archiveSource); // MD 직렬화
  const archiveData = archiveMdxSource.frontmatter as unknown as ArchiveData;

  return (
    <>
      <ArchiveHeader archiveData={archiveData} />
      <ArchiveContent source={archiveMdxSource}>
        <ArchiveToc source={archiveSource} />
      </ArchiveContent>
      <ArchiveComment />
    </>
  );
}
