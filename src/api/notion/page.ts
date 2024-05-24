import notion from "@/lib/noiton";

export async function getNotionPages() {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;

  try {
    if (!databaseId) throw new Error("DATABASE_ID is undefined.");
    const tempInfo = await notion.getNotionInfo(databaseId);
    const info = notion.getParseNotionInfo(tempInfo); // 데이터 가공
    const pages = await notion.getPages(databaseId);

    return { info, pages, error: false };
  } catch (e) {
    return {
      info: { title: "Not Found", description: "Not Found", category: [], icon: "", tags: null, coverURL: null },
      pages: [],
      error: true,
    };
  }
}
