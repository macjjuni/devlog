import { ChangeEvent, useCallback, useRef, Dispatch, SetStateAction } from 'react'
import { CreateRequestGuestBookType, ReadGuestBookType } from '@/types/notion'
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

const GuestBookForm = ({ session, setGuestBooks }: IGuestBookForm) => {
  const commentRef = useRef<HTMLTextAreaElement>(null)
  const secretRef = useRef<boolean>(false)

  // 숨김 라디오 버튼 값 적용
  const changeSecret = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    secretRef.current = e.target.checked
  }, [])

  // 방명록 등록 API 파라미터 반환
  const generateParams = (content: string): CreateRequestGuestBookType | undefined => {
    if (!session) throw Error('no Session')
    return {
      content,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      secret: secretRef.current,
    }
  }

  // 방명록 작성 API 호출
  const postGuestBook = async () => {
    const commentText = commentRef.current?.value.trim()
    if (!commentText) {
      console.error('no txt')
      return
    }
    try {
      const params = generateParams(commentText)
      const { list: resList } = await fetch('/api/notion/postGuestBook', { method: 'POST', body: JSON.stringify(params) }).then((res) => res.json())
      if (commentRef.current) commentRef.current.value = ''
      setGuestBooks(resList)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="py-sm">
      <CheckBox label="비밀글" onChange={changeSecret} />
      <div className="relative flex justify-between items-center gap-xl w-full">
        <textarea ref={commentRef} rows={2} className={textAreaStyle} placeholder="✏️🙏🏻🙇🏻‍♂️" />
        <button type="button" onClick={postGuestBook} className={buttonStyle}>
          <BsFillSendFill fontSize={18} />
        </button>
      </div>
    </div>
  )
}

export default GuestBookForm
