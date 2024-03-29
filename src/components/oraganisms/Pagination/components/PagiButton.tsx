import { useRouter } from 'next/router'
import Link from 'next/link'
import common from '@/styles/common'

interface IPagiButton {
  text?: string | number
  icon?: React.ReactNode
  href: number | string
  active?: boolean
  disabled?: boolean
}

const defaultStyle = `flex items-center justify-center w-[40px] h-[40px] p-sm ${common.textHover}`
const originStyle = `${defaultStyle} ${common.textColor}`
const activeStyle = `${defaultStyle} underline text-BLG1000 dark:text-BLG0 font-bold`
const disabledStyle = `${defaultStyle} text-BLG500 cursor-not-allowed`

const PagiButton = ({ text, href, icon, active = false, disabled = false }: IPagiButton) => {
  const { query } = useRouter()
  const { name } = query || (null as string | null)

  const generateUrl = () => {
    if (!name) return `?page=${href.toString()}`
    if (typeof name !== 'string') return ''
    return `${encodeURIComponent(name)}/?page=${href.toString()}`
  }

  const children = () => {
    if (text?.toString()) return text
    if (icon) return icon
  }

  if (disabled)
    return (
      <button type="button" name="link" aria-label="Page move Disabled" className={disabledStyle} disabled>
        {children()}
      </button>
    )
  if (active)
    return (
      <button type="button" name="link" aria-label={text?.toString()} className={activeStyle} disabled>
        {children()}
      </button>
    )
  return (
    <Link href={generateUrl()} role="link" aria-label={text?.toString() || 'Next page in the list'} className={originStyle}>
      {children()}
    </Link>
  )
}

export default PagiButton
