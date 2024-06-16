// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";
import { getNotionPages } from "@/api/notion/page";
import { NotionInfoProps, NotionPageProps } from "@/@types/notion";

/**
 * 노션 모든 페이지를 조회하는 API
 */

interface AllPages {
  info: NotionInfoProps | {};
  pages: NotionPageProps[];
  error: boolean;
}

export async function GET(): Promise<NextResponse<AllPages>> {
  try {
    const { info, pages } = await getNotionPages();

    return NextResponse.json({ info, pages, error: false });
  } catch (err) {
    console.error(err);

    return NextResponse.json({ info: {}, pages: [], error: true });
  }
}
