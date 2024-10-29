"use server";

import { isNumber } from "@/utils/string";
import { redirect } from "next/navigation";

export interface SearchParamsProps {
  page: string | undefined;
}

export default async function useSearchParamsPage(searchParams: SearchParamsProps) {
  const { page } = searchParams;
  // 숫자 형식이 아닌 페이지 사이즈 접근 에러 핸들링
  if (page !== undefined && !isNumber(page)) {
    redirect("/404");
  }

  return page ? Number(page) : undefined;
}
