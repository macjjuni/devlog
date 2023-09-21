// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import notion from '@/lib/noiton'
import generateCoverUrl from '@/utils/notion'

type IGetPageCover = { coverUrl: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<IGetPageCover>) {
  const { id } = req.query
  if (typeof id !== 'string') throw Error('Error')

  try {
    const recordMap = await notion.getDetailPage(id)
    // page 타입인 블럭의 키값 찾기
    let pageKey = ''
    Object.keys(recordMap.block).forEach((key) => {
      if (recordMap.block[key].value.type === 'page') pageKey = key
    })

    const coverUrl = generateCoverUrl(recordMap.block[pageKey].value)
    res.status(200).json({ coverUrl })
  } catch (err) {
    console.error(err)
    res.status(200).json({ coverUrl: '' })
  }
}
