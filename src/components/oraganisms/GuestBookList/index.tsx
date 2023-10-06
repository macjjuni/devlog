import { useCallback } from 'react'
import { useRouter } from 'next/router'

import guestbookApi from '@/api/notion/guestBook'
import type { Session } from 'next-auth'
import type { ReadGuestBookType } from '@/@types/notion'

import LottieItem from '@/components/atom/LottieItem'
import nofoundLottie from '@/assets/lottie/404.json'
import lottieOption from '@/utils/lottie'
import { AnimatePresence, motion } from 'framer-motion'
import { guestbookListMotion } from '@/utils/framer'

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

const defaultListStyle = 'flex flex-col w-full gap-md min-h-guestBookList p-md overflow-y-auto overflow-x-hidden'

const GuestBookList = ({ list, status, session, getList }: IGuestBookForm) => {
  const { reload } = useRouter()

  // 말풍선 좌우 위치 체크
  const isLeft = (email: string) => session?.user.email === email

  // 방명록 삭제 API 호출
  const removeGuestBook = useCallback(async (id: string) => {
    const { status: deleteStatus } = await guestbookApi.delete(id)
    if (deleteStatus) getList()
  }, [])

  // 로딩 스켈레톤
  if (list.length === 0)
    return (
      <ul className={defaultListStyle}>
        <SkeletonUI />
      </ul>
    )

  // 에러
  if (!status)
    return (
      <ul className="flex flex-col justify-center items-center w-full min-h-guestBookList gap-md px-sm">
        <li className="flex flex-col justify-center items-center w-full">
          <LottieItem animationData={nofoundLottie} defaultOption={lottieOption[404]} />
          <button className="text-bodyLg w-[100px] border py-md rounded-sm" type="button" onClick={reload}>
            새로고침
          </button>
        </li>
      </ul>
    )

  return (
    <AnimatePresence>
      {list.length && (
        <motion.ul initial="hidden" animate="show" variants={guestbookListMotion} className={defaultListStyle}>
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
        </motion.ul>
      )}
    </AnimatePresence>
  )
}

export default GuestBookList
