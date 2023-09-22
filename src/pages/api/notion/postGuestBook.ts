import type { NextApiRequest, NextApiResponse } from 'next'
import type { CreateRequestGuestBookType, SaveRequestGuestBookType, ReadGuestBookType } from '@/types/notion'
import notion from '@/lib/noiton'
import requestIp from 'request-ip'

interface CreateCommentReq extends NextApiRequest {
  body: string
}
// 댓글용 Page ID
const guestbookPageId = process.env.NOTION_COMMENT_PAGE_ID

const handler = async (req: CreateCommentReq, res: NextApiResponse<{ list: ReadGuestBookType[] }>) => {
  try {
    // 잘못된 호출 핸들링
    if (req.method !== 'POST' || typeof req.body !== 'string' || req.body === '') {
      throw Error('Not Valid Request body or Not POST Method or body is empty')
    }

    if (!guestbookPageId) throw Error('Not found PageId 404!')

    const defaultGuestbook: CreateRequestGuestBookType = JSON.parse(req.body)

    const params: SaveRequestGuestBookType = {
      ...defaultGuestbook,
      ip: requestIp.getClientIp(req) || 'unknown',
    }
    // 방명록 저장
    await notion.createGuestBook(guestbookPageId, params)
    // 방명록 재조회
    const list = await notion.getGuestBookList(guestbookPageId)

    res.status(200).json({ list })
  } catch (err) {
    console.error(err)
  }
}
export default handler
