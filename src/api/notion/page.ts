import request from "@/lib/request";
import notion, { getHeadDescription } from "@/lib/noiton";
import { getPageTitle } from "notion-utils";

export async function getNotionPages() {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;

  try {
    if (!databaseId) throw new Error("DATABASE_ID is undefined.");
    const tempInfo = await notion.getNotionInfo(databaseId);
    const info = notion.getParseNotionInfo(tempInfo); // 데이터 가공
    const pages = await notion
      .getPages(databaseId);

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

export interface IGetPageCover {
  coverUrl: string
  alt: string
}

const getPageCoverImage = async (id: string) => request<IGetPageCover>(`/api/notion/getPageCover?id=${encodeURIComponent(id)}`);

export default getPageCoverImage;
