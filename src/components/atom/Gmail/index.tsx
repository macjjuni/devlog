// import { useCallback, type MouseEvent } from 'react'
import GmailSvg from '@/components/svg/GmailSvg'
import useStore from '@/store'
import { dark } from '@/@types/theme'

const emailUrl = process.env.NEXT_PUBLIC_EMAIL || ''

export default function Gmail() {
  const { color } = useStore((state) => state)

  //   const onEmail = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
  //     e.preventDefault()
  //   }, [])

  return (
    <a href={`mailto:${emailUrl}`} className="flex items-center gap-sm text-body font-normal hoverUnderline">
      <GmailSvg width={25} height={25} color={color === dark ? '#fff' : '#000'} />
      <span>Email</span>
    </a>
  )
}
