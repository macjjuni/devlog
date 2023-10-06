import { useState, useCallback, useRef, type ChangeEvent } from 'react'
import type { CreateRequestGuestBookType } from '@/@types/notion'

import useStore from '@/store'
import CheckBox from '@/components/atom/Checkbox'
import { Session } from 'next-auth'
import { BsFillSendFill } from 'react-icons/bs'
import { IoIosRefresh } from 'react-icons/io'

import common from '@/styles/common'
import guestbookApi from '@/api/notion/guestBook'

const textAreaStyle = `w-full p-md pr-[52px] border outline-0 rounded-sm resize-none no-scroll dark:border-BLG700 dark:bg-BLG800 transition-colors ${common.trs}`
const buttonStyle = `absolute bottom-sm right-sm flex justify-center gap-sm text-primary p-sm border rounded-sm border-primary ${common.trs}`

interface IGuestBookForm {
  getList: () => void
  session?: Session | null
}

const maxLength = 255

const GuestBookForm = ({ getList, session }: IGuestBookForm) => {
  const { setModal, disabled } = useStore((state) => state)

  const [text, setText] = useState('')
  const commentRef = useRef<HTMLTextAreaElement>(null)
  const secretRef = useRef<boolean>(false)

  const authCheck = useCallback(() => {
    if (!session) {
      commentRef.current?.blur()
      setModal(true)
    }
  }, [session])

  const changeText = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target?.value)
    },
    [text],
  )

  // 숨김 라디오 버튼 값 적용
  const changeSecret = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    secretRef.current = e.target.checked
  }, [])

  // 방명록 등록 API 파라미터 반환
  const generateParams = useCallback((): CreateRequestGuestBookType | undefined => {
    if (!session) {
      setModal(true)
      return
    }
    return {
      content: text.trim(),
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      secret: secretRef.current,
    }
  }, [text])

  // 방명록 작성 API 호출
  const postGuestBook = useCallback(async () => {
    authCheck()
    if (text.trim() === '') {
      commentRef.current?.focus()
      setText('')
      return
    }
    try {
      const params = generateParams()
      if (!params) return
      const { status } = await guestbookApi.create(params)
      if (status) {
        getList()
        setText('') // 입력창 초기화
      }
    } catch (err) {
      console.error(err)
    }
  }, [text])

  return (
    <div className={`sticky bottom-0 mx-md pb-md border-t border-BLG300 dark:border-BLG600 ${common.bgColor}`}>
      <CheckBox label="비밀글" onChange={changeSecret} />
      <div className="relative flex justify-between items-center gap-xl w-full">
        <textarea
          ref={commentRef}
          value={text}
          onChange={changeText}
          onFocus={authCheck}
          rows={2}
          disabled={disabled}
          className={textAreaStyle}
          maxLength={maxLength}
          placeholder="✏️🙏🏻🙇🏻‍♂️"
        />
        <div className="alert absolute top-sm right-sm text-bodySm">
          {text.length}/{maxLength}
        </div>
        <button type="button" disabled={disabled} onClick={postGuestBook} className={buttonStyle}>
          {!disabled ? <BsFillSendFill fontSize={18} /> : <IoIosRefresh className="spin" fontSize={20} />}
        </button>
      </div>
    </div>
  )
}

export default GuestBookForm
