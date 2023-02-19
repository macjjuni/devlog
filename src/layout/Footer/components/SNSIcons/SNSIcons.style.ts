import styled from 'styled-components'
import { type ColorModeTypes } from 'types/theme'
import { dark } from 'redux/slice/colorMode'

export const SNSList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  & > li:first-child > a > svg {
    width: 28px;
    height: 28px;
  }
  & > li:nth-child(2) > a > svg {
    width: 23px;
    height: 23px;
  }
  & > li:last-child > a > svg {
    width: 28px;
    height: 28px;
  }
`
export const SNSItem = styled.li<{ colorMode: ColorModeTypes }>`
  font-size: 0;
  width: 40px;
  height: 40px;
  margin-left: 14px;
  border-radius: 50%;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  &:hover {
    ${({ colorMode }) => {
      if (colorMode === dark) return 'box-shadow: rgba(255, 255, 255, 0.25) 0px 4px 8px -2px, rgba(255, 255, 255, 0.15) 0px 0px 0px 1px;'
      return 'box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;'
    }}
  }
  &:active {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`
