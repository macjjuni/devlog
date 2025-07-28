import { Suspense } from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getMetadata } from "@/config/meta";
import { ArchiveContent } from "@/layout";
import { getNotionPages } from "@/api/notion/page";
import { isNumber } from "@/utils/string";


export const metadata: Metadata = getMetadata("Archive", null, "archive", null);
export const revalidate = 600;

export default async function ArchivePage({ searchParams }: { searchParams: Promise<{ page: string | undefined }> }) {

  const resolvedSearchParams = await searchParams; // searchParams 해소
  const { page } = resolvedSearchParams; // 비구조화 할당

  // 숫자 형식이 아닌 페이지 사이즈 접근 에러 핸들링(use server)
  if (page !== undefined && !isNumber(page)) {
    redirect("/404");
  }

  console.time("Get All Archives");
  const { pages, error } = await getNotionPages();
  console.timeEnd("Get All Archives");

  if (error) {
    redirect("/404");
  }

  return (
    <Suspense fallback={null}>
      <section className="archive__layout__content">
        <ArchiveContent pages={pages} />
      </section>
    </Suspense>
  );
}
