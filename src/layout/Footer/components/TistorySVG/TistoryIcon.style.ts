import styled from 'styled-components'
import { type ColorModeTypes } from 'types/theme'
import { dark } from 'redux/slice/colorMode'

export const SVGStyled = styled.svg<{ colorMode: ColorModeTypes }>`
  fill: ${({ colorMode }) => {
    if (colorMode === dark) return '#fff'
    return '#000'
  }};
  transition: 0.3s ease;
`
