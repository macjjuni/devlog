import { createElement, type ReactNode, type CSSProperties, type FC } from 'react'
import styled from 'styled-components'
import { TypoVariantTypes } from 'styles/theme'
import { fullwidthStyle, ellipsisStyle } from './Text.style'

export type IText = {
  children: ReactNode
  variant?: TypoVariantTypes
  type: keyof JSX.IntrinsicElements
  fullwidth?: boolean | undefined | 0 | 1
  ellipsis?: boolean | undefined | 0 | 1
  fontSize?: string
  color?: string
  style?: CSSProperties
  className?: string
}

const TextStyled = styled(({ type, children, ...props }: IText) => createElement(type, props, children))`
  ${({ fullwidth }) => (fullwidth ? fullwidthStyle : '')}
  ${({ ellipsis }) => (ellipsis ? ellipsisStyle : '')}
  ${({ theme, variant }) => {
    if (variant) return theme.fontStyle.pc[variant]
    return theme.fontStyle.pc.default
  }}
    // Responsive Font Style
    @media ${({ theme }) => theme.device.mobile} {
    ${({ theme, variant }) => {
      if (variant) return theme.fontStyle.mobile[variant]
      return theme.fontStyle.mobile.default
    }}
  }
`

const Text: FC<IText> = ({ children, type, variant = 'default', ellipsis = false, fullwidth = false, color, fontSize, style, className = '' }) => {
  return (
    <TextStyled type={type} variant={variant} fullwidth={fullwidth ? 1 : 0} ellipsis={ellipsis ? 1 : 0} style={{ ...style, color, fontSize }} className={className}>
      {children}
    </TextStyled>
  )
}

export default Text
