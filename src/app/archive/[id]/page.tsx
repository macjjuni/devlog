import ArchiveHeader from "@/component/archive/archiveHeader/archiveHeader";
import ArchiveContent from "@/component/archive/archiveContent/ArchiveContent";
import ArchiveComment from "@/component/archive/archiveComment/archiveComment";
import { mdxSerializer } from "@/lib/mdx";
import ErrorPage from "@/app/404/page";
import { getAllArchivePath } from "@/utils/archive";
import { ArchiveData } from "@/@types/archive";
import ArchiveToc from "@/component/archive/archiveToc/archiveToc";
import request from "@/utils/request";
import { ArchiveResponse } from "@/app/api/archive/detail/route";

export async function generateStaticParams() {
  const allArchivePath = await getAllArchivePath();

  return allArchivePath.map((archivePath) => ({ id: archivePath }));
}

export default async function ArchiveDetailPage({ params }: { params: { id: string } }) {

  const archiveDetailUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/api/archive/detail?id=${params.id}`;
  console.log("archiveDetailUrl", archiveDetailUrl);
  const { archive: archiveSource } = await request<ArchiveResponse>(archiveDetailUrl);

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
