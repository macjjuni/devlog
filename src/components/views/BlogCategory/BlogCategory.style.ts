import styled from 'styled-components'
import type { ColorModeTypes } from 'types/theme'
import { dark } from 'redux/slice/colorMode'

export const CategoryWrap = styled.aside``

export const Category = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  height: 80px;
  scroll-snap-type: x;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const CategoryItem = styled.li<{ bgColor: string; colormode: ColorModeTypes }>`
  padding: 0 8px;
  border-radius: 4px;
  background-color: ${({ bgColor }) => bgColor};
  ${({ theme }) => theme.fontStyle.desktop.text_strong};
  color: ${({ theme }) => theme.colors.gray.BLG900};
  box-shadow: ${({ colormode }) => {
    if (colormode === dark) return 'rgba(255, 255, 255, 0.1) 0px 4px 6px -1px, rgba(255, 255, 255, 0.06) 0px 2px 4px -1px'
    return 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'
  }};
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    box-shadow: ${({ colormode }) => {
      if (colormode === dark) return 'rgba(255, 255, 255, 0.24) 0px 3px 8px;'
      return 'rgba(0, 0, 0, 0.6) 0px 3px 8px;'
    }};
  }
`
