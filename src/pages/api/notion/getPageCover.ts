// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import notion from '@/lib/noiton'
import generateCoverUrl from '@/utils/notion'

type IGetPageCover = { coverUrl: string; alt: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<IGetPageCover>) {
  console.log('요청 옴')
  const { id } = req.query
  if (typeof id !== 'string') throw Error('Error')

  try {
    const recordMap = await notion.getDetailPage(id)
    // page 타입인 블럭의 키값 찾기
    let pageKey = ''
    Object.keys(recordMap.block).forEach((key) => {
      if (recordMap.block[key].value.type === 'page') pageKey = key
    })

    const paegBlock = recordMap.block[pageKey].value

    const alt = paegBlock.properties.title[0][0] // 페이지 타이틀 이미지 alt 속성으로 사용

    const coverUrl = generateCoverUrl(paegBlock) // 페이지 커버 이미지 주소

    res.status(200).json({ coverUrl, alt })
  } catch (err) {
    console.error(err)
    res.status(200).json({ coverUrl: '', alt: '' })
  }
}