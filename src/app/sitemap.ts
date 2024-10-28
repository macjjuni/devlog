import { MetadataRoute } from "next";
import routes from "@/route";
import request from "@/utils/request";
import { ArchiveListResponse } from "@/app/api/archive/list/route";
import { ArchiveCategoryListResponse } from "@/app/api/archive/category/list/route";

const domain = process.env.NEXT_PUBLIC_DOMAIN || "";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const { categories } = (await request<ArchiveCategoryListResponse>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/archive/category/list`)) || { categories: [] };
  const { archives } = await request<ArchiveListResponse>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/archive/list?page=1&pageSize=10000`);

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
