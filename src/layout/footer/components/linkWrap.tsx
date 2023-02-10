import type { FC, ReactNode } from 'react'
import { LinkStyled } from '../Footer.style'

export interface ILinkWrap {
  href: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  icon: ReactNode
  title?: string
}

const LinkWrap: FC<ILinkWrap> = ({ href, target = '_blank', icon, title }) => {
  return (
    <LinkStyled href={href} target={target} title={title} whileHover={{ rotate: 8 }} transition={{ duration: 0.3 }}>
      {icon}
    </LinkStyled>
  )
}

export default LinkWrap
