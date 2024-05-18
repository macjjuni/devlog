import notion from "@/lib/noiton";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const name = req.nextUrl.searchParams.get("name");

  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;

  try {
    if (!databaseId) {
      throw new Error("DATABASE_ID is not defined");
    }
    if (name === null) {
      throw new Error("name is not defined");
    }

    const pages = await notion.getPages(databaseId, { categoryName: name });

    const tempInfo = await notion.getNotionInfo(databaseId);
    const info = notion.getParseNotionInfo(tempInfo); // 데이터 가공

    const cateArr = info.category?.map((cate) => cate.name) || [];
    const currentName = cateArr.find((cate) => cate === name);

    // 존재하지 않은 카테고리 접근 시 404 페이지로 이동
    if (currentName === undefined) {
      return NextResponse.json({ info: null, pages: [], error: true });
    }
    return NextResponse.json({ info, pages, error: false });
  } catch (e) {
    console.error("NextResponse.redirect");
    return NextResponse.json({ info: null, pages: [], error: true });
  }
}
