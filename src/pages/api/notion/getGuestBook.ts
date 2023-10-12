import type { NextApiRequest, NextApiResponse } from 'next'
import type { ReadGuestBookType } from '@/@types/notion'
import type { Session } from 'next-auth'

import { getServerSession } from 'next-auth/next'
import notion from '@/lib/noiton'
import NextAuth from '../auth/[...nextauth]'

/**
 * 방명록 대화목록 조회 API
 */

interface CreateCommentReq extends NextApiRequest {}

export default async function handler(req: CreateCommentReq, res: NextApiResponse<{ list: ReadGuestBookType[]; status: boolean }>) {
  const reqCacheControl = req.headers['cache-control']
  if (typeof reqCacheControl === 'string') res.setHeader('Cache-Control', reqCacheControl)
  try {
    const guestbookPageId = process.env.NOTION_GUESTBOOK_PAGE_ID
    if (!guestbookPageId) throw Error('Not found pageId')

    const session: Session | null = await getServerSession(req, res, NextAuth)
    const list = await notion.getGuestBookList(guestbookPageId, session?.user?.email || null)
    console.log('Api call :: Guestbook List')
    res.status(200).json({ list, status: true })
  } catch (err) {
    console.error(err)
    res.status(200).json({ list: [], status: false })
  }
}
