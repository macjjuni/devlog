import { MetadataRoute } from "next";
import routes from "@/route";
import notion from "@/lib/noiton";

const domain = process.env.NEXT_PUBLIC_DOMAIN || "";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID || "";

  if (!databaseId) {
    throw new Error("Not found database ID!");
  }

  const { category } = notion.getParseNotionInfo(await notion.getNotionInfo(databaseId));
  const pages = await notion.getPages(databaseId);
  // const projects = await notion.getAllProject(databaseId);

  const routeUrls = routes.map((route) => ({
    url: `${domain}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  const categoryUrls = category?.map(({ name }) => ({
    url: `${domain}/archive/category/${encodeURIComponent(name)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  })) || [];

  const pageUrls = pages.map(({ id, published }) => ({
    url: `${domain}/archive/${id}`,
    lastModified: published,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...routeUrls, ...categoryUrls, ...pageUrls];
}
