import type { FC, ReactNode } from 'react'
import * as F from '../Footer.style'

export interface ISNSItem {
  href: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  icon: ReactNode
  title?: string
}

const SNSItem: FC<ISNSItem> = ({ href, target = '_blank', icon, title }) => {
  return (
    <F.SNSItem>
      <F.SNSLink href={href} target={target} title={title} whileHover={{ rotate: 8 }} transition={{ duration: 0.3 }}>
        {icon}
      </F.SNSLink>
    </F.SNSItem>
  )
}

export default SNSItem
