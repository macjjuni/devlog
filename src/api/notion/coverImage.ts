import request from '@/lib/request'
import type { IGetPageCover } from '@/pages/api/notion/getPageCover'

const getPageCoverImage = async (id: string) => {
  const result = await request<IGetPageCover>(`/api/notion/getPageCover?id=${encodeURIComponent(id)}`)
  return result
}

export default getPageCoverImage
