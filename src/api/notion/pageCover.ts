import request from "@/lib/request";
import type { IGetPageCover } from "@/pages1/api/notion/getPageCover";

const getPageCoverImage = async (id: string) => (
  request<IGetPageCover>(`/api/notion/getPageCover?id=${encodeURIComponent(id)}`)
);

export default getPageCoverImage;
