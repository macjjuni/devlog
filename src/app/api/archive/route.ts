import { NextRequest, NextResponse } from "next/server";

import notion, { getHeadDescription } from "@/lib/noiton";
import { getPageTitle } from "notion-utils";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");

  try {
    if (!id) {
      throw Error("ID is not defined");
    }
    // Get recordMap of detail page
    const recordMap = await notion.getDetailPage(id);
    const title = recordMap ? getPageTitle(recordMap) : "";
    const des = recordMap ? getHeadDescription(recordMap) : "";
    const { coverUrl, alt } = notion.generateCoverUrl(recordMap); // 페이지 커버 이미지 주소

    return NextResponse.json({ recordMap, title, des, coverUrl, alt, error: false });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ recordMap: null, title: null, des: null, coverUrl: null, alt: null, error: true });
  }
}
