import { MetadataRoute } from "next";
import routes from "@/route";
import { getArchiveList, getCategoryList } from "@/utils/archive";

const domain = process.env.NEXT_PUBLIC_DOMAIN || "";

async function getAllArchive() {
  return getArchiveList(1, 10000);
}

async function getArchiveCategories() {
  return getCategoryList(false);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const categories = await getArchiveCategories();
  const { archives } = (await getAllArchive()) || { archives: [] };

  const routeUrls = routes.map((route) => ({
    url: `${domain}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  const categoryUrls = categories?.map((categoryName) => ({
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
