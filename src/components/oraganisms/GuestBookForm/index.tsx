import { useState, useCallback, useRef, type Dispatch, type SetStateAction, type ChangeEvent } from 'react'
import type { CreateRequestGuestBookType, ReadGuestBookType } from '@/types/notion'
import useStore from '@/store'
import CheckBox from '@/components/atom/Checkbox'
import { Session } from 'next-auth'
import { BsFillSendFill } from 'react-icons/bs'
import common from '@/styles/common'

const textAreaStyle = `w-full p-md pr-[52px] border outline-0 rounded-sm resize-none no-scroll`
const buttonStyle = `absolute bottom-sm right-sm flex justify-center gap-sm text-primary p-sm border rounded-sm hover:border-primary hover:bg-BLG50 ${common.trs}`

interface IGuestBookForm {
  session?: Session | null
  setGuestBooks: Dispatch<SetStateAction<ReadGuestBookType[]>>
}

const maxLength = 255

const GuestBookForm = ({ session, setGuestBooks }: IGuestBookForm) => {
  const [text, setText] = useState('')
  const { setModal } = useStore((state) => state)
  const commentRef = useRef<HTMLTextAreaElement>(null)
  const secretRef = useRef<boolean>(false)

  const authCheck = () => {
    if (!session) {
      commentRef.current?.blur()
      setModal(true)
    }
  }

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
  const generateParams = (): CreateRequestGuestBookType | undefined => {
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
  }

  // 방명록 작성 API 호출
  const postGuestBook = async () => {
    authCheck()
    if (text.trim() === '') {
      commentRef.current?.focus()
      setText('')
      return
    }
    try {
      const params = generateParams()
      const { list: resList } = await fetch('/api/notion/postGuestBook', { method: 'POST', body: JSON.stringify(params) }).then((res) => res.json())
      setText('')
      setGuestBooks(resList)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="py-sm">
      <CheckBox label="비밀글" onChange={changeSecret} />
      <div className="relative flex justify-between items-center gap-xl w-full">
        <textarea
          ref={commentRef}
          value={text}
          onChange={changeText}
          onFocus={authCheck}
          rows={2}
          className={textAreaStyle}
          maxLength={maxLength}
          placeholder="✏️🙏🏻🙇🏻‍♂️"
        />
        <div className="alert absolute top-sm right-sm text-bodySm">
          {text.length}/{maxLength}
        </div>
        <button type="button" onClick={postGuestBook} className={buttonStyle}>
          <BsFillSendFill fontSize={18} />
        </button>
      </div>
    </div>
  )
}

export default GuestBookForm
