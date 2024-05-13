// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import notion from '@/lib/noiton'
import config from '@/config/notion.config'

const { blog } = config

/**
 * 사이트 대표 이미지 주소 가져오는 API
 * 노션 설명글에 작성된 주소를 가져옴
 */

export interface IGetSiteImage {
  coverURL: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<IGetSiteImage>) {
  res.setHeader('Cache-Control', 'public, max-age=3600, stale-while-revalidate=10') // 1시간 캐싱

  const databaseId = process.env.NOTION_BLOG_DATABASE_ID

  try {
    if (!databaseId) throw new Error('DATABASE_ID is undefined.')
    const tempInfo = await notion.getNotionInfo(databaseId)
    const { coverURL } = notion.getParseNotionInfo(tempInfo) // 데이터 가공

    res.status(200).redirect(coverURL || blog.SITE_IMAGE)
  } catch (err) {
    console.error(err)
    res.status(200).redirect(blog.SITE_IMAGE)
  }
}
