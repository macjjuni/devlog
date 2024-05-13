// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import notion from '@/lib/noiton'

/**
 * 노션 페이지 커버 이미지 URL 가져오는 API
 * 클라이언트에서 호출해 사용하지만, 아직 사용 안함
 */

export interface IGetPageCover {
  coverUrl: string
  alt: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<IGetPageCover>) {
  res.setHeader('Cache-Control', 'public, max-age=3600, stale-while-revalidate=10')

  try {
    const { id } = req.query
    if (typeof id !== 'string') throw Error('Error')
    const recordMap = await notion.getDetailPage(id)
    const { coverUrl, alt } = notion.generateCoverUrl(recordMap) // 페이지 커버 이미지 주소
    // console.log('cover image 요청!')
    res.status(200).json({ coverUrl, alt })
  } catch (err) {
    console.error(err)
    res.status(200).json({ coverUrl: 'error', alt: 'error' })
  }
}
