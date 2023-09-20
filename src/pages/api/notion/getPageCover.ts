// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id } = req.query
  if (typeof id !== 'string') throw Error('Error')
  // const detailPage = await notion.getDetailPage(id)
  // console.log(detailPage)

  res.status(200).json({ id })
}
