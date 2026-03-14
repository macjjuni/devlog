import { Suspense } from "react";
import { redirect } from "next/navigation";
import Fallback from "@/app/archive/fallBack";
import { getCategoryPostList } from "@/api/posts";
import { getAllCategories } from "@/lib/markdown";
import { ArchiveSidebar, ArchiveContent } from "@/layout";
import type { Metadata } from "next";
import { getMetadata } from "@/config/meta";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolveParams = await params;
  return getMetadata(`Archive - ${resolveParams.slug}`, null, `archive/category/${resolveParams.slug}`, null);
}

export async function generateStaticParams() {
  try {
    const categories = getAllCategories();
    return categories.map((name) => ({ slug: name }));
  } catch (e) {
    console.error(e);
    return [];
  }
}

export const revalidate = 600;
export default async function ArchiveCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolveParams = await params;
  const { info, pages, error } = await getCategoryPostList(resolveParams.slug);

  if (error || !info) {
    redirect("/404");
  }

  return (
    <Suspense fallback={<Fallback />}>
      <ArchiveSidebar info={info} />
      <section className="archive__layout__content">
        <ArchiveContent pages={pages} />
      </section>
    </Suspense>
  );
}
