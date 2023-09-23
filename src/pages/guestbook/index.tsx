import { useState, useEffect } from 'react'
import type { GetServerSideProps } from 'next'

import NextAuth from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
import { useSession } from 'next-auth/react'
import { Session } from 'next-auth'

import FullPage from '@/layouts/Layout/FullPage'
import LoginModal from '@/components/modal/LoginModal'
import LoginButton from '@/components/molecule/LoginButton'
import GuestBookList from '@/components/oraganisms/GuestBookList'
import GuestBookForm from '@/components/oraganisms/GuestBookForm'

import notion from '@/lib/noiton'
import type { ReadGuestBookType } from '@/types/notion'

interface IGuestBook {
  list: ReadGuestBookType[]
}

export const getServerSideProps: GetServerSideProps<IGuestBook> = async (context) => {
  const session: Session | null = await getServerSession(context.req, context.res, NextAuth)

  try {
    const guestbookPageId = process.env.NOTION_GUESTBOOK_PAGE_ID
    if (!guestbookPageId) throw Error('Not found pageId')

    const list = await notion.getGuestBookList(guestbookPageId, session?.user?.email || null)

    return { props: { list } }
  } catch (err) {
    console.error(err)
    return { props: { list: [] } }
  }
}

export default function guestbook({ list }: IGuestBook) {
  const { data: session } = useSession()
  const [guestBooks, setGuestBooks] = useState<ReadGuestBookType[]>([])

  useEffect(() => {
    setGuestBooks(list)
  }, [list])

  return (
    <FullPage>
      <LoginButton session={session} />
      <GuestBookList list={guestBooks} session={session} setGuestBooks={setGuestBooks} />
      <GuestBookForm session={session} setGuestBooks={setGuestBooks} />
      <LoginModal />
    </FullPage>
  )
}
