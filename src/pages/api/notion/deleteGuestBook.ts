import type { NextApiRequest, NextApiResponse } from 'next'
import type { ReadGuestBookType } from '@/types/notion'
import type { Session } from 'next-auth'

import { getServerSession } from 'next-auth/next'
import notion from '@/lib/noiton'
import NextAuth from '../auth/[...nextauth]'

interface CreateCommentReq extends NextApiRequest {
  body: string
}
// 댓글용 Page ID
const guestbookPageId = process.env.NOTION_GUESTBOOK_PAGE_ID

const handler = async (req: CreateCommentReq, res: NextApiResponse<{ list: ReadGuestBookType[] }>) => {
  try {
    // 잘못된 호출 핸들링
    if (req.method !== 'POST' || typeof req.body !== 'string' || req.body === '') {
      throw Error('Not Valid Request body or Not POST Method or body.is is empty')
    }

    if (!guestbookPageId) throw Error('Not found PageId 404!')

    const session: Session | null = await getServerSession(req, res, NextAuth)

    // 방명록 저장
    await notion.removeGuestBook(req.body)
    // 방명록 재조회
    const list = await notion.getGuestBookList(guestbookPageId, session?.user?.email || null)

    res.status(200).json({ list })
  } catch (err) {
    console.error(err)
  }
}
export default handler
