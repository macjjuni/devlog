import { useEffect, useRef } from 'react'
import { appendUtter, isContainUtter, toggleTheme, commentElemetId } from '@/utils/utterances'
import useStore from '@/store'

export default function Comment() {
  const { color } = useStore((state) => state)
  const commentRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const commentDom = commentRef.current
    if (!commentDom || color === null) return

    if (isContainUtter(commentDom)) {
      toggleTheme(color) // 렌더링 후 테마 변경 됐을 때 로직 실행!
    } else {
      appendUtter(commentDom, color) // 렌더링 안 됐으면 스크립트 삽입 로직 실행!
    }
  }, [color])

  return (
    <section ref={commentRef} id={commentElemetId} className="flex justify-between items-center gap-xxl max-w-layout w-full min-h-[270px] px-sm mt-xxxxl" />
  )
}
