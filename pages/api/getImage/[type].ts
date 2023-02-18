import got from 'got'
import type { NextApiRequest, NextApiResponse } from 'next'
import { parseDatabaseItems } from '../../../notion/utils/parseDatabaseItems'
import { getPageItem } from '../../../notion/notion'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query

  if (!id) throw new Error('No id provided')

  const pageItem = await getPageItem(id.toString())
  const { cover: url } = parseDatabaseItems([pageItem])[0]

  const response = await got(url, { responseType: 'buffer' })
  const contentType = response.headers['content-type']

  if (!contentType) throw new Error('No content-type in response headers')

  res.setHeader('Content-Type', contentType)

  res.send(response.body)
}

export default handler
