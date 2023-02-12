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
      <meta name="description" content="꾸생의 프론트엔드 개발자 포트폴리오, kkusaeng, macjjuni, juni_official" />
      {/* Facebook Meta Tags */}
      <meta property="og:url" content="https://www.macjjuni.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={htmlTitle} />
      <meta property="og:description" content="꾸생의 프론트엔드 개발자 포트폴리오, kkusaeng, macjjuni, juni_official" />
      <meta property="og:image" content="https://www.macjjuni.com/image/cover.png" />
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="macjjuni.com" />
      <meta property="twitter:url" content="https://www.macjjuni.com/" />
      <meta name="twitter:title" content={htmlTitle} />
      <meta name="twitter:description" content="꾸생의 프론트엔드 개발자 포트폴리오, kkusaeng, macjjuni, juni_official" />
      <meta name="twitter:image" content="https://www.macjjuni.com/image/cover.png" />
    </Head>
  )
}
export default Heads
