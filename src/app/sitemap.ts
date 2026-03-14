import { MetadataRoute } from "next";
import routes from "@/route";
import { getAllPosts, getAllCategories } from "@/lib/markdown";

const domain = process.env.NEXT_PUBLIC_DOMAIN || "";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const categories = getAllCategories();
  const posts = getAllPosts();

  const routeUrls = routes.map((route) => ({
    url: `${domain}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  const categoryUrls = categories.map((name) => ({
    url: `${domain}/archive/category/${encodeURIComponent(name)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const pageUrls = posts.map(({ slug, date }) => ({
    url: `${domain}/archive/${slug}`,
    lastModified: date,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...routeUrls, ...categoryUrls, ...pageUrls];
}
