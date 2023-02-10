import { css } from 'styled-components'
import { type TypoVariantTypes } from 'styles/theme'

export const fullwidthStyle = css`
  width: 100%;
`
export const ellipsisStyle = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const generateStyle = (variant: TypoVariantTypes) => {
  const typoStyle = css`
    ${({ theme }) => theme.fontStyle.pc[variant]}
  `
  return typoStyle
}
