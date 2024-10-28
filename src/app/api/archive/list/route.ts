import { NextRequest, NextResponse } from "next/server";
import { getAllArchiveList } from "@/utils/archive";
import { ArchiveData } from "@/@types/archive";

/**
 * 아카이브 목록 데이터 조회
 */

export interface ArchiveListResponse {
  archives: ArchiveData[];
  totalLength: number;
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = request.nextUrl;
  const page = Number(searchParams.get("page"));
  let pageSize: number | undefined = Number(searchParams.get("pageSize"));

  if (Number.isNaN(pageSize) || pageSize < 1) {
    pageSize = undefined;
  }
  if (Number.isNaN(page) || page < 1) {
    return NextResponse.redirect("/404"); // 404 페이지로 리다이렉션
  }

  try {
    const { archives, totalLength } = await getAllArchiveList(page, pageSize);

    return NextResponse.json({ archives, totalLength });
  } catch (err) {
    console.error(err);
  }
  return NextResponse.json({ archives: [], totalLength: 0 });
}
