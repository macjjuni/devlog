import { NextResponse, NextRequest } from "next/server";
import { getCategoryList } from "@/utils/archive";

/**
 * 특정 카테고리 아카이브 목록 데이터 조회
 */

export interface ArchiveCategoryListResponse {
  categories: string[];
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = request.nextUrl;
  const isContainAll = searchParams.get("isContainAll") === "true";

  const categories = await getCategoryList(isContainAll);

  try {
    return NextResponse.json({ categories });
  } catch (err) {
    console.error(err);
  }

  return NextResponse.json({ categories: [] });
}
