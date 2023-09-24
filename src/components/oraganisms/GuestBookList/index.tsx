import { useEffect, useRef, Dispatch, SetStateAction } from 'react'

import type { ReadGuestBookType } from '@/types/notion'
import type { Session } from 'next-auth'

import MessageLeft from './components/MessageLeft'
import MessageRight from './components/MessageRight'
import RemoveButton from './components/RemoveButton'

interface IGuestBookForm {
  session?: Session | null
  list: ReadGuestBookType[]
  setGuestBooks: Dispatch<SetStateAction<ReadGuestBookType[]>>
}

const GuestBookList = ({ session, list, setGuestBooks }: IGuestBookForm) => {
  const listRef = useRef<HTMLUListElement>(null)
  const isLeft = (email: string) => {
    return session?.user.email === email
  }

  // 방명록 삭제 API 호출
  const removeGuestBook = async (id: string) => {
    const { list: resList } = await fetch('/api/notion/deleteGuestBook', { method: 'POST', body: id }).then((res) => res.json())
    setGuestBooks(resList)
  }

  useEffect(() => {
    setTimeout(() => {
      if (!listRef.current) return
      listRef.current.scrollTop = listRef.current.scrollHeight
    }, 150)
  }, [list])

  return (
    <ul ref={listRef} className="flex flex-col w-full gap-md h-guestbook px-sm overflow-y-auto">
      {list?.map((item) =>
        isLeft(item.email) ? (
          <MessageRight
            key={item.id}
            item={item}
            button={
              <RemoveButton
                isShow={!!(session && session?.user?.email === item.email)}
                onClick={() => {
                  removeGuestBook(item.id)
                }}
              />
            }
          />
        ) : (
          <MessageLeft
            key={item.id}
            item={item}
            button={
              <RemoveButton
                isShow={!!(session && session?.user?.email === item.email)}
                onClick={() => {
                  removeGuestBook(item.id)
                }}
              />
            }
          />
        ),
      )}
    </ul>
  )
}

export default GuestBookList
