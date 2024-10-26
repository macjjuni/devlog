import { MetadataRoute } from "next";
import routes from "@/route";
import { getAllArchiveList, getCategoryList } from "@/utils/archive";

const domain = process.env.NEXT_PUBLIC_DOMAIN || "";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID || "";

  if (!databaseId) {
    throw new Error("Not found database ID!");
  }

  const categoryList = await getCategoryList();
  // const pages = await notion.getPages(databaseId);
  const archives = await getAllArchiveList();
  // const projects = await notion.getAllProject(databaseId);

  const routeUrls = routes.map((route) => ({
    url: `${domain}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  const categoryUrls = categoryList?.map(categoryName => ({
    url: `${domain}/archive/category/${encodeURIComponent(categoryName)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  })) || [];

  const pageUrls = archives.map(({ url, date }) => ({
    url: `${domain}/archive/${url}`,
    lastModified: date,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...routeUrls, ...categoryUrls, ...pageUrls];
}
