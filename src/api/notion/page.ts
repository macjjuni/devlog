import request from "@/lib/request";
import notion, { getHeadDescription } from "@/lib/noiton";
import { getPageTitle } from "notion-utils";
import config from "@/config/notion.config";

const { blog } = config;

export async function getNotionCoverUrl() {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;

  try {
    if (!databaseId) {
      throw new Error("DATABASE_ID is undefined.");
    }

    const tempInfo = await notion.getNotionInfo(databaseId);
    const { coverURL } = notion.getParseNotionInfo(tempInfo); // 데이터 가공

    const coverUrl = coverURL || (blog.SITE_IMAGE as string);

    return { coverUrl, error: false };
  } catch (e) {
    return { coverUrl: blog.SITE_IMAGE, error: false };
  }
}

export async function getNotionPages() {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;

  try {
    if (!databaseId) {
      throw new Error("DATABASE_ID is undefined.");
    }

    const [tempInfo, pages] = await Promise.all([
      notion.getNotionInfo(databaseId),
      notion.getPages(databaseId),
    ]);

    // const tempInfo = await notion.getNotionInfo(databaseId);
    // const pages = await notion.getPages(databaseId);
    const info = notion.getParseNotionInfo(tempInfo);

    return { info, pages, error: false };
  } catch (e) {
    return {
      info: { title: "Not Found", description: "Not Found", category: [], icon: "", tags: null, coverURL: null },
      pages: [],
      error: true,
    };
  }
}

export async function getNotionDetail(id: string) {
  try {
    if (!id) {
      throw Error("ID is not defined");
    }
    // Get recordMap of detail page
    const recordMap = await notion.getDetailPage(id);
    const title = recordMap ? getPageTitle(recordMap) : "";
    const des = recordMap ? getHeadDescription(recordMap) : "";
    const { coverUrl, alt } = notion.generateCoverUrl(recordMap); // 페이지 커버 이미지 주소

    return { recordMap, title, des, coverUrl, alt, error: false };
  } catch (err) {
    console.error(err);
    return { recordMap: null, title: null, des: null, coverUrl: null, alt: null, error: true };
  }
}

export async function getNotionCategoryList(categoryName: string) {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;

  try {
    if (!databaseId) {
      throw new Error("DATABASE_ID is not defined");
    }
    if (categoryName === null) {
      throw new Error("name is not defined");
    }

    const pages = await notion.getPages(databaseId, { categoryName });

    const tempInfo = await notion.getNotionInfo(databaseId);
    const info = notion.getParseNotionInfo(tempInfo); // 데이터 가공

    const cateArr = info.category?.map((cate) => cate.name) || [];
    const currentName = cateArr.find((cate) => cate === categoryName);

    // 존재하지 않은 카테고리 접근 시 404 페이지로 이동
    if (currentName === undefined) {
      return { info: null, pages: [], error: true };
    }
    return { info, pages, error: false };
  } catch (e) {
    console.error(e);
    return { info: null, pages: [], error: true };
  }
}

export async function getNotionSearchPages(keyword: string) {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;

  try {
    if (!databaseId) {
      throw new Error("DATABASE_ID is not defined");
    }

    const searchPages = await notion.getSelectPage(keyword);
    const tempInfo = await notion.getNotionInfo(databaseId);
    const info = notion.getParseNotionInfo(tempInfo); // 데이터 가공

    return { searchPages, info, error: false };
  } catch (e) {
    console.error(e);
    return { searchPages: [], pages: [], info: null, error: true };
  }
}

export interface IGetPageCover {
  coverUrl: string;
  alt: string;
}

const getPageCoverImage = async (id: string) => request<IGetPageCover>(`/api/notion/getPageCover?id=${encodeURIComponent(id)}`);

export default getPageCoverImage;
