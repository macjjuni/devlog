import type { NextApiRequest, NextApiResponse } from 'next'
import type { ReadGuestBookType } from '@/types/notion'
import type { Session } from 'next-auth'

import { getServerSession } from 'next-auth/next'
import notion from '@/lib/noiton'
import NextAuth from '../auth/[...nextauth]'

interface CreateCommentReq extends NextApiRequest {}

export default async function handler(req: CreateCommentReq, res: NextApiResponse<{ list: ReadGuestBookType[]; status: boolean }>) {
  res.setHeader('Cache-Control', 'public, max-age=600, stale-while-revalidate=60')
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