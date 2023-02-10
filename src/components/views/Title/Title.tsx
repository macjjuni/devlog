import Head from 'next/head'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { pages } from 'router'

const useMultiEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
const mainTitle: string | undefined = process.env.NEXT_PUBLIC_TITLE

const Titles = () => {
  const [htmlTitle, setTitle] = useState(mainTitle)
  const { route } = useRouter()

  useMultiEffect(() => {
    const currentPage = pages.find((page) => page.path === route)
    // 환경변수에서 메인 타이틀 유무 체크
    if (mainTitle) {
      if (currentPage) {
        setTitle(`${mainTitle} - ${currentPage.title}`)
      } else {
        setTitle(`${mainTitle} - 404 Not Found`)
      }
      return
    }
    // 메인 타이틀 없을 경우 에러메세지 출력
    if (currentPage) {
      setTitle(`No Title - ${currentPage.title}`)
      console.error('Not found main title in environment variable')
    }
  }, [route])

  return (
    <Head>
      <title>{htmlTitle}</title>
    </Head>
  )
}
export default Titles
