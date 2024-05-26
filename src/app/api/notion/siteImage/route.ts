// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { redirect } from "next/navigation";

import { getNotionCoverUrl as _getNotionCoverUrl } from "@/api/notion/page";
import { cache } from "react";

export const revalidate = 10800;
const getNotionCoverUrl = cache(_getNotionCoverUrl);

export async function GET() {
  const { coverUrl } = await getNotionCoverUrl();

  redirect(coverUrl);
}
