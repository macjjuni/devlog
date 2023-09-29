import { useCallback, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

import guestbookApi from '@/api/notion/guestBook'
import type { Session } from 'next-auth'
import type { ReadGuestBookType } from '@/types/notion'

import LottieItem from '@/components/atom/LottieItem'
import nofoundLottie from '@/assets/lottie/404.json'
import lottieOption from '@/utils/lottie'

import MessageLeft from './components/MessageLeft'
import MessageRight from './components/MessageRight'
import RemoveButton from './components/RemoveButton'
import SkeletonUI from './components/SkeletonUI'

interface IGuestBookForm {
  list: ReadGuestBookType[]
  status: boolean
  session?: Session | null
  getList: () => void
}

const GuestBookList = ({ list, status, session, getList }: IGuestBookForm) => {
  const listRef = useRef<HTMLUListElement>(null)
  const { reload } = useRouter()

  // 말풍선 좌우 위치 체크
  const isLeft = (email: string) => session?.user.email === email

  // 스크롤 위치 하단으로 초기화
  const initScroll = useCallback(() => {
    setTimeout(() => {
      if (!listRef.current) return
      listRef.current.scrollTop = listRef.current.scrollHeight
    }, 24)
  }, [])

  // 방명록 삭제 API 호출
  const removeGuestBook = useCallback(async (id: string) => {
    const { status: deleteStatus } = await guestbookApi.delete(id)
    if (deleteStatus) getList()
  }, [])

  useEffect(() => {
    initScroll()
  }, [list])

  // 로딩 스켈레톤
  if (list.length === 0)
    return (
      <ul className="flex flex-col w-full gap-md h-guestbook px-sm overflow-y-auto">
        <SkeletonUI />
      </ul>
    )

  // 에러
  if (!status)
    return (
      <ul className="flex flex-col justify-center items-center w-full gap-md h-guestbook px-sm overflow-y-auto">
        <li className="flex flex-col justify-center items-center w-full">
          <LottieItem animationData={nofoundLottie} defaultOption={lottieOption[404]} />
          <button className="text-bodyLg w-[100px] border py-md rounded-sm" type="button" onClick={reload}>
            새로고침
          </button>
        </li>
      </ul>
    )

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
