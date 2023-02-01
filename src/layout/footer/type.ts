import { ReactNode } from 'react'

export interface ILinkWrap {
  href: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  icon: ReactNode
  title?: string
}
