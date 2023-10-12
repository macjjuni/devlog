import type { Session } from 'next-auth'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { CreateRequestGuestBookType, SaveRequestGuestBookType, IGuestBookPostResult } from '@/@types/notion'

import { getServerSession } from 'next-auth/next'
import notion from '@/lib/noiton'
import requestIp from 'request-ip'
import NextAuth from '../auth/[...nextauth]'

/**
 * 방명록 등록 API
 */

interface CreateCommentReq extends NextApiRequest {
  body: CreateRequestGuestBookType
}
// 댓글전용 Notion Page ID
const guestbookPageId = process.env.NOTION_GUESTBOOK_PAGE_ID

const handler = async (req: CreateCommentReq, res: NextApiResponse<IGuestBookPostResult>) => {
  try {
    // 잘못된 호출 핸들링
    if (req.method !== 'POST' || !req.body) {
      throw Error('Not Valid Request body or Not POST Method or body is empty')
    }

    if (!guestbookPageId) throw Error('Not found PageId 404!')

    const session: Session | null = await getServerSession(req, res, NextAuth)
    if (!session) throw new Error('No Auth') // 권한 체크

    const params: SaveRequestGuestBookType = {
      ...req.body,
      ip: requestIp.getClientIp(req) || 'unknown',
    }
    // 방명록 저장
    await notion.createGuestBook(guestbookPageId, params)
    // 방명록 재조회
    // const list = await notion.getGuestBookList(guestbookPageId, session?.user?.email || null)

    res.status(200).json({ status: true })
  } catch (err) {
    console.error(err)
    res.status(404).json({ status: false })
  }
}
export default handler
