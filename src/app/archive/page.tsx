import { Suspense } from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getMetadata } from "@/config/meta";
import { ArchiveSidebar, ArchiveContent } from "@/layout";
import { getNotionPages } from "@/api/notion/page";
import { isNumber } from "@/utils/string";
import Fallback from "./fallBack";

export const runtime = "edge"; // Edge 환경 설정
export const metadata: Metadata = getMetadata("Archive", null, "archive", null);
export const revalidate = 60 * 10;

export default async function ArchivePage({ searchParams }: { searchParams: { page: string | undefined } }) {
  const { page } = searchParams;

  // 숫자 형식이 아닌 페이지 사이즈 접근 에러 핸들링(use server)
  if (page !== undefined && !isNumber(page)) {
    redirect("/404");
  }

  const startTime = performance.now(); // 시작 시간 기록

  const { info, pages, error } = await getNotionPages();
  const endTime = performance.now(); // 종료 시간 기록
  console.log(`Execution time: ${(endTime - startTime).toFixed(2)}ms`);

  if (error) {
    redirect("/404");
  }

  return (
    <Suspense fallback={<Fallback />}>
      <aside className="archive__layout__sidebar">
        <ArchiveSidebar info={info} />
      </aside>
      <section className="archive__layout__content">
        <ArchiveContent pages={pages} />
      </section>
    </Suspense>
  );
}
