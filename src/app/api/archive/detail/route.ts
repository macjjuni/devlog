import { NextRequest, NextResponse } from "next/server";
import { getArchivePath } from "@/utils/archive";

/**
 * 아카이브 상세 페이지 조회
 */

export interface ArchiveRequest {
  id: string;
}

export interface ArchiveResponse {
  archive: string | null;
}

export async function GET(request: NextRequest): Promise<NextResponse<ArchiveResponse>> {
  const { searchParams } = request.nextUrl;
  const id = searchParams.get("id");

  if (id === null) {
    return NextResponse.json({ archive: null });
  }

  try {
    const archiveSource = await getArchivePath(id);

    return NextResponse.json({ archive: archiveSource });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ archive: null });
  }
}
