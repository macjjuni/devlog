import Head from 'next/head'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { pages } from 'router'

const useMultiEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
const mainTitle: string | undefined = process.env.NEXT_PUBLIC_TITLE

const Heads = () => {
  const [htmlTitle, setTitle] = useState(mainTitle)
  const { route } = useRouter()

  useMultiEffect(() => {
    const currentPage = pages.find((page) => page.path === route)
    // 환경변수에서 메인 타이틀 유무 체크
    if (mainTitle) {
      if (currentPage) {
        setTitle(`${mainTitle} - ${currentPage.title}`)
        return
      }
      setTitle(`${mainTitle} - 404 Not Found`)
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
      {/* HTML Meta Tags */}
      <title>{htmlTitle}</title>
      <meta name="description" content="꾸생, 프론트엔드 개발자, 포트폴리오, kkusaeng, macjjuni, juni_official" />
      {/* og Meta Tags */}
      <meta property="og:title" content="꾸생의 포트폴리오" />
      <meta property="og:site_name" content="꾸생의 포트폴리오" />
      <meta property="og:url" content="https://www.macjjuni.com" />
      <meta property="og:description" content="꾸생의 웹 프론트엔드 개발자 포트폴리오" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.macjjuni.com/image/cover.jpg" />
    </Head>
  )
}
export default Heads
