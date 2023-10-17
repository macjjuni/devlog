import { useEffect, useState, useCallback } from 'react'
import { useSession } from 'next-auth/react'

import FullLayout from '@/layouts/PageLayout/FullLayout'
import NextHead from '@/components/seo/DefaultMeta'
import GuestBookList from '@/components/oraganisms/GuestBookList'
import GuestBookForm from '@/components/oraganisms/GuestBookForm'
import LoginModal from '@/components/modal/LoginModal'
import ConfirmModal from '@/components/modal/ConfirmModal'

import guestbookApi from '@/api/notion/guestBook'
import type { ReadGuestBookType } from '@/@types/notion'

// SEO를 고려할 필요가 없는 페이지
// export const getServerSideProps: GetServerSideProps<IGuestBook> = async (context) => {
// }

export default function guestbook() {
  const [list, setList] = useState<ReadGuestBookType[]>([])
  const [status, setStatus] = useState<boolean>(true)
  const { data: session } = useSession()

  // API 호출(HTTP캐싱 적용)
  const getGuestBookList = useCallback(async () => {
    try {
      const { list: guestBookList, status: resStatus } = await guestbookApi.getList()
      setList(guestBookList)
      setStatus(resStatus)
    } catch (err) {
      console.error(err)
      setStatus(false)
    }
  }, [])
  // no-store 강제 API 호출
  const getForceGuestBookList = useCallback(async () => {
    const { list: guestBookList } = await guestbookApi.forceGetList()
    setList(guestBookList)
  }, [])

  // 스크롤 위치 하단으로 초기화
  const initScroll = useCallback(() => {
    setTimeout(() => {
      document.documentElement.scrollTop = document.documentElement.scrollHeight
    }, 10)
  }, [])

  useEffect(() => {
    initScroll()
  }, [list])

  useEffect(() => {
    getGuestBookList()
  }, [])

  return (
    <>
      <NextHead title="GuestBook" des="방명록 페이지" />
      <FullLayout>
        <GuestBookList list={list} status={status} getList={getForceGuestBookList} session={session} />
        <GuestBookForm getList={getForceGuestBookList} session={session} />
        <LoginModal />
        <ConfirmModal />
      </FullLayout>
    </>
  )
}
