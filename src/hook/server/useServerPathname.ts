"use server";

import { headers } from "next/headers";

export default async function useServerPathname() {
  const headerList = headers();
  return headerList.get("x-url");
}
