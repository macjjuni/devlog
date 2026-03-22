import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArchiveComment, MarkdownViewer } from "@/components/archive";
import { getPostDetail } from "@/api/posts";
import { getAllPosts } from "@/lib/markdown";
import { getMetadata } from "@/config/meta";
import blogConfig from "@/config/blog.config";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { post } = await getPostDetail(slug);

  if (!post) return getMetadata(null, null, `archive/${slug}`, null);

  const imageUrl = post.cover || `${process.env.NEXT_PUBLIC_DOMAIN}${blogConfig.blog.SITE_IMAGE}`;
  return getMetadata(post.title, post.description, `archive/${slug}`, imageUrl);
}

export async function generateStaticParams() {
  try {
    const allPosts = getAllPosts();
    return allPosts.map(({ slug }) => ({ slug }));
  } catch (e) {
    console.error(e);
    return [];
  }
}

export default async function ArchiveDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { post, error } = await getPostDetail(slug);

  if (error || !post) {
    notFound();
  }

  return (
    <>
      <MarkdownViewer post={post} />
      <ArchiveComment />
    </>
  );
}
