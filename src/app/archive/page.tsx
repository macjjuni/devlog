import { Suspense } from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getMetadata } from "@/config/meta";
import ArchiveSidebar from "@/layout/archiveSidebar/archiveSidebar";
import ArchiveContent from "@/layout/archiveContent/archiveContent";
import { isNumber } from "@/utils/string";
import { getAllArchiveList } from "@/utils/archive";
import Fallback from "./fallBack";

export const metadata: Metadata = getMetadata("Archive", null, "archive", null);

async function getArchives(page?: number, pageSize?: number) {
  const { archives, totalLength } = await getAllArchiveList(page, pageSize);

  return { archives, totalLength };
}

export default async function ArchivePage({ searchParams }: { searchParams: { page: string | undefined } }) {
  const { page } = searchParams;
  // 숫자 형식이 아닌 페이지 사이즈 접근 에러 핸들링
  if (page !== undefined && !isNumber(page)) {
    redirect("/404");
  }
  const pageParam = page ? Number(page) : undefined;

  try {
    const { archives, totalLength } = await getArchives(pageParam);

    return (
      <Suspense fallback={<Fallback />}>
        <ArchiveSidebar />
        <ArchiveContent archives={archives} totalLength={totalLength} />
      </Suspense>
    );
  } catch (error) {
    console.error(error);
    redirect("/404");
  }
}
