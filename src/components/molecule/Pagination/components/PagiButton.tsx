import { useRouter } from 'next/router'
import PagiStyled from '../style'

interface IPagiButton {
  text?: string | number
  icon?: React.ReactNode
  href: number | string
  active?: boolean
  disabled?: boolean
}

const PagiButton = ({ text, href, icon, active = false, disabled = false }: IPagiButton) => {
  const { query } = useRouter()
  const { name } = query || (null as string | null)

  const enableCheck = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) e.preventDefault()
  }

  const generateUrl = () => {
    if (!name) return `?page=${href.toString()}`
    if (typeof name !== 'string') return ''
    return `${encodeURIComponent(name)}/?page=${href.toString()}`
  }

  const children = () => {
    if (text?.toString()) return text
    if (icon) return icon
  }

  if (disabled) return <PagiStyled.DisabledButton disabled>{children()}</PagiStyled.DisabledButton>
  if (active) return <PagiStyled.ActiveButton disabled>{children()}</PagiStyled.ActiveButton>
  return (
    <PagiStyled.Button href={generateUrl()} onClick={enableCheck}>
      {children()}
    </PagiStyled.Button>
  )
}

export default PagiButton
