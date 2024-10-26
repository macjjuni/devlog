// 숫자 형식 판별 정규식
import { ReactNode } from "react";

export const isNumber = (str: string) => /^\d+$/.test(str);

// 숫자로 걸러주는 정규식
export const extractNumbers = (str: string) => {
  return str.replace(/\D/g, "");
};

export const textToId = (str: ReactNode) => {
  return str
    ?.toString()
    .toLocaleLowerCase()
    .replace(/[^\w\sㄱ-힣-]/g, " ")
    .replaceAll(" ", "-");
};

// 맨 앞 문자열만 대문자로 변경
export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
