import { FC, createElement } from 'react'
import styled from 'styled-components'
import { fullwidthStyle, ellipsisStyle } from './style'
import { type IText } from './type'

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
