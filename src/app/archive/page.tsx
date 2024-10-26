import { Suspense } from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getMetadata } from "@/config/meta";
import ArchiveSidebar from "@/layout/archiveSidebar/archiveSidebar";
import ArchiveContent from "@/layout/archiveContainer/archiveContainer";
import { isNumber } from "@/utils/string";
import Fallback from "./fallBack";
import { getAllArchiveList } from "@/utils/archive";

export const metadata: Metadata = getMetadata("Archive", null, "archive", null);

export default async function ArchivePage({ searchParams }: { searchParams: { page: string | undefined } }) {
  const { page } = searchParams;

  // 숫자 형식이 아닌 페이지 사이즈 접근 에러 핸들링(use server)
  if (page !== undefined && !isNumber(page)) {
    redirect("/404");
  }

  try {
    const allArchives = await getAllArchiveList();

    return (
      <Suspense fallback={<Fallback />}>
        <ArchiveSidebar />
        <ArchiveContent archives={allArchives} />
      </Suspense>
    );
  } catch (error) {

    console.error(error);
    redirect("/404");
  }
}
