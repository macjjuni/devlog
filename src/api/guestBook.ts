import request from '@/lib/request'
import type { IGuestBookResult, CreateRequestGuestBookType, IGuestBookPostResult } from '@/types/notion'
import useStore from '@/store'

// 생성, 삭제 처리할 동안 버튼 비활성화 처리
const { getState } = useStore

const guestbookApi = {
  getList: async () => {
    const url = '/api/notion/getGuestBook'
    const res: IGuestBookResult = await request(url)
    getState().setDisabled(false)
    return res
  },
  forceGetList: async () => {
    const url = '/api/notion/getGuestBook'
    const res: IGuestBookResult = await request(url, { cache: 'no-store' })
    getState().setDisabled(false)
    return res
  },
  create: async (params: CreateRequestGuestBookType) => {
    getState().setDisabled(true)
    const result: IGuestBookPostResult = await fetch('/api/notion/createGuestBook', { method: 'POST', body: JSON.stringify(params) }).then((res) => res.json())
    return result
  },
  delete: async (id: string) => {
    getState().setDisabled(true)
    const result = await request<IGuestBookPostResult>('/api/notion/deleteGuestBook', { method: 'POST', body: JSON.stringify(id) })
    return result
  },
}

export default guestbookApi
