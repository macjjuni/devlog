import request from "@/lib/request";

export interface IGetPageCover {
  coverUrl: string
  alt: string
}

const getPageCoverImage = async (id: string) => request<IGetPageCover>(`/api/notion/getPageCover?id=${encodeURIComponent(id)}`);

export default getPageCoverImage;
