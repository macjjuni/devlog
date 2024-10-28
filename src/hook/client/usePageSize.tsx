"use client";

import { useSearchParams } from "next/navigation";

export default function usePageSize(searchText: string) {
  const searchParam = useSearchParams().get(searchText);

  return searchParam !== null ? parseInt(searchParam, 10) : 1;
}
