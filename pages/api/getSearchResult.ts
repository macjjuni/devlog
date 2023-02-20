import type { NextApiRequest, NextApiResponse } from 'next'
import type { ICard } from '../../src/notion/types/types'

import { getSearchItems } from '../../src/notion/notion'
import { parseDatabaseItems } from '../../src/notion/utils/parseDatabaseItems'

export interface SearchResultType {
  data: ICard[]
}

const handler = async (req: NextApiRequest, res: NextApiResponse<SearchResultType>) => {
  const { q } = req.query

  if (!q) throw new Error('Query is required')

  const query = q.toString()
  const searchItems = await getSearchItems(query)
  const parsedItems = parseDatabaseItems(searchItems)

  res.status(200).json({ data: parsedItems })
}

export default handler
