import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

import FullPage from '@/layouts/Layout/FullPage'
import LoginModal from '@/components/modal/LoginModal'
import NextHead from '@/components/seo/DefaultMeta'
import GuestBookList from '@/components/oraganisms/GuestBookList'
import GuestBookForm from '@/components/oraganisms/GuestBookForm'

import guestbookApi from '@/api/notion/guestBook'
import type { ReadGuestBookType } from '@/types/notion'

// interface IGuestBook {
//   list: ReadGuestBookType[]
// }
// SEO를 고려할 필요가 없는 페이지임
// export const getServerSideProps: GetServerSideProps<IGuestBook> = async (context) => {
// }

export default function guestbook() {
  const [list, setList] = useState<ReadGuestBookType[]>([])
  const { data: session } = useSession()

  // API 호출(캐시 사용)
  const getGuestBookList = async () => {
    const { list: guestBookList } = await guestbookApi.getList()
    setList(guestBookList)
  }
  // no-store 강제 API 호출
  const getForceGuestBookList = async () => {
    const { list: guestBookList } = await guestbookApi.forceGetList()
    setList(guestBookList)
  }

  useEffect(() => {
    getGuestBookList()
  }, [])

  return (
    <>
      <NextHead title="GuestBook" des="방명록 페이지" />
      <FullPage>
        {/* <LoginButton session={session} /> */}
        <GuestBookList list={list} getList={getForceGuestBookList} session={session} />
        <GuestBookForm getList={getForceGuestBookList} session={session} />
        <LoginModal />
      </FullPage>
    </>
  )
}
