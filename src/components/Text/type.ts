import { ReactNode, CSSProperties } from 'react'
import { TypoVariantTypes } from '../../styles/theme'

export type IText = {
  children: ReactNode
  variant?: TypoVariantTypes
  type: keyof JSX.IntrinsicElements
  fullwidth?: boolean | undefined | 0 | 1
  ellipsis?: boolean | undefined | 0 | 1
  fontSize?: string
  color?: string
  style?: CSSProperties
}
