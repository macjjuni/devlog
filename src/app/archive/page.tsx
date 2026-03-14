import { Suspense } from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getMetadata } from "@/config/meta";
import { ArchiveContent } from "@/layout";
import { getPostList } from "@/api/posts";
import { isNumber } from "@/utils/string";
import Fallback from "./fallBack";

export const metadata: Metadata = getMetadata("Archive", null, "archive", null);
export const revalidate = 600;

export default async function ArchivePage({ searchParams }: { searchParams: Promise<{ page: string | undefined }> }) {
  const resolvedSearchParams = await searchParams;
  const { page } = resolvedSearchParams;

  if (page !== undefined && !isNumber(page)) {
    redirect("/404");
  }

  const { pages, error } = await getPostList();

  if (error) {
    redirect("/404");
  }

  return (
    <Suspense fallback={<Fallback />}>
      <ArchiveContent pages={pages} />
    </Suspense>
  );
}
