import ArchiveHeader from "@/component/archive/archiveHeader/archiveHeader";
import ArchiveContent from "@/component/archive/archiveContent/ArchiveContent";
import ArchiveComment from "@/component/archive/archiveComment/archiveComment";
import { mdxSerializer } from "@/lib/mdx";
import ErrorPage from "@/app/404/page";
import { getAllArchivePath, getArchiveFileSource, getArchivePath } from "@/utils/archive";
import { ArchiveData } from "@/@types/archive";
import ArchiveToc from "@/component/archive/archiveToc/archiveToc";

export async function generateStaticParams() {
  const allArchivePath = await getAllArchivePath();

  return allArchivePath.map((archivePath) => ({
    id: archivePath,
  }));
}

export default async function ArchiveDetailPage({ params }: { params: { id: string } }) {
  try {
    const currentArchivePath = await getArchivePath(params.id);
    if (!currentArchivePath) {
      throw Error("Not Found Archive");
    }

    const source = getArchiveFileSource(currentArchivePath);
    const mdxSource = await mdxSerializer(source); // MD 직렬화
    const archiveData = mdxSource.frontmatter as unknown as ArchiveData;

    return (
      <>
        <ArchiveHeader archiveData={archiveData} />
        <ArchiveContent source={mdxSource}>
          <ArchiveToc source={source} />
        </ArchiveContent>
        <ArchiveComment />
      </>
    );
  } catch (e) {
    return <ErrorPage />;
  }
}
