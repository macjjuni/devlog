"use client";

import { usePathname } from "next/navigation";

export default function useCategoryName() {
  const searchParam = usePathname().split("/") || null;

  return searchParam[3] ? searchParam[3] : null;
}
