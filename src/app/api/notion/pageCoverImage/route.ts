// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextRequest, NextResponse } from "next/server";
import notion from "@/lib/noiton";

/**
 * 노션 페이지 커버 이미지 URL 가져오는 API
 * 클라이언트에서 호출해 사용하지만, 아직 사용 케이스 없음
 */

export interface IGetPageCover {
  coverUrl: string;
  alt: string;
}

export async function GET(req: NextRequest) {
  // res.setHeader("Cache-Control", "public, max-age=3600, stale-while-revalidate=10");
  const { searchParams } = req.nextUrl;
  const id = searchParams.get("id");

  try {
    if (!id) {
      throw Error("Error");
    }
    const recordMap = await notion.getDetailPage(id);
    const { coverUrl, alt } = notion.generateCoverUrl(recordMap); // 페이지 커버 이미지 주소

    return NextResponse.json({ coverUrl, alt });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ coverUrl: "error", alt: "error" });
  }
}
