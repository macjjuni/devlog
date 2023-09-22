import { useRef, ChangeEvent, useCallback, useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import FullPage from '@/layouts/Layout/FullPage'
import LoginModal from '@/components/modal/LoginModal'
import notion from '@/lib/noiton'
import { CreateRequestGuestBookType, ReadGuestBookType } from '@/types/notion'
import { useSession } from 'next-auth/react'
// import date from '@/lib/date'
import WriteSvg from '@/components/svg/WriteSvg'
// import { signIn, signOut, useSession } from 'next-auth/react'

interface IGuestBook {
  list: ReadGuestBookType[]
}

export const getServerSideProps: GetServerSideProps<IGuestBook> = async () => {
  try {
    const guestbookPageId = process.env.NOTION_COMMENT_PAGE_ID
    if (!guestbookPageId) throw Error('Not found pageId')

    const list = await notion.getGuestBookList(guestbookPageId)

    return { props: { list } }
  } catch (err) {
    console.error(err)
    return { props: { list: [] } }
  }
}

const buttonStyle = `flex justify-center gap-sm relative p-md rounded-sm bg-BLG50 shadow-modal whitespace-nowrap`

export default function guestbook({ list }: IGuestBook) {
  const [guestBooks, setGuestBooks] = useState<ReadGuestBookType[]>([])
  const commentRef = useRef<HTMLTextAreaElement>(null)
  const secretRef = useRef<boolean>(false)
  const { data: session } = useSession()

  // 방명록 등록 API 파라미터
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

  // 방명록 작성
  const postGuestBook = async () => {
    const commentText = commentRef.current?.value.trim()
    if (!commentText) {
      console.error('no txt')
      return
    }
    try {
      const params = generateParams(commentText)
      const { list: resList } = await fetch('/api/notion/postGuestBook', { method: 'POST', body: JSON.stringify(params) }).then((res) => res.json())
      setGuestBooks(resList)
    } catch (err) {
      console.error(err)
    } finally {
      if (commentRef.current) commentRef.current.value = ''
    }
  }

  // 방명록 삭제
  const removeGuestBook = async (id: string) => {
    const { list: resList } = await fetch('/api/notion/deleteGuestBook', { method: 'POST', body: id }).then((res) => res.json())
    setGuestBooks(resList)
  }

  // 숨김 라디오 버튼 값 적용
  const changeSecret = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    secretRef.current = e.target.checked
  }, [])

  useEffect(() => {
    setGuestBooks(list)
  }, [list])

  return (
    <FullPage>
      <ul className="flex flex-col w-full gap-lg">
        {guestBooks?.map((item) => (
          <li className="flex flex-col border p-md" key={item.id}>
            <p>{item.name}</p>
            <p>
              {item.content} - {item.created}
            </p>
            {session && session?.user.email === item.email && (
              <button
                type="button"
                onClick={() => {
                  removeGuestBook(item.id)
                }}
              >
                삭제
              </button>
            )}
          </li>
        ))}
      </ul>
      <input type="checkbox" onChange={changeSecret} />
      <div className="flex justify-between items-center gap-xl w-full">
        <textarea ref={commentRef} className="w-full p-md border outline-0 rounded-sm resize-none" placeholder="방명록을 작성해주세요 🙏🏻" />
        <button type="button" onClick={postGuestBook} className={buttonStyle}>
          <WriteSvg width={24} height={24} />
          방명록 작성
        </button>
      </div>
      <LoginModal />
    </FullPage>
  )
}
