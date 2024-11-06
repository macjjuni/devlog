import type { MultiSelectPropertyItemObjectResponse, SelectPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";

// 노션 색상 타입
type SelectColor = "default" | "gray" | "brown" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "red";
export type SelectPropertyResponse = {
  id: string;
  name: string;
  color: SelectColor;
  description: string | null;
};

export type ICategory = SelectPropertyResponse[] | null;

// 노전 블로그 정보 타입
export interface NotionInfoProps {
  title: string;
  description: string;
  coverURL: string | null;
  icon: string;
  tags: {
    options: SelectPropertyResponse[];
  } | null;
  category: ICategory;
}

// 노션 페이지 타입
export interface NotionPageProps {
  id: string;
  cover: string;
  title: string;
  category: SelectPropertyItemObjectResponse["select"] | null;
  published: string;
  tags: MultiSelectPropertyItemObjectResponse["multi_select"];
}

export interface DatabaseQueryOption {
  categoryName?: string;
  title?: string;
}
