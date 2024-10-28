import { NextRequest, NextResponse } from "next/server";
import { getSearchArchive } from "@/utils/archive";
import { ArchiveData } from "@/@types/archive";

/**
 * 아카이브 검색 목록 데이터 조회
 */

export interface ArchivesByTitleResponse {
  archives: ArchiveData[];
  totalLength: number;
}

type Params = Promise<{ slug: string }>;

export async function GET(request: NextRequest, { params }: { params: Params }): Promise<NextResponse> {
  const { slug: searchText } = await params;
  const { searchParams } = request.nextUrl;
  const page = Number(searchParams.get("page"));
  let pageSize: number | undefined = Number(searchParams.get("pageSize"));

  if (Number.isNaN(pageSize) || pageSize < 1) { pageSize = undefined; }

  const decodedSearchText = decodeURIComponent(searchText);

  try {
    const { archives, totalLength } = await getSearchArchive(decodedSearchText, page, pageSize);

    return NextResponse.json({ archives, totalLength });
  } catch (err) {
    console.error(err);
    return NextResponse.redirect("/404"); // 404 페이지로 리다이렉션
  }
}
