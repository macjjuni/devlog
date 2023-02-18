import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ColorModeTypes } from 'type/theme'
import { dark } from 'redux/slice/colorMode'

export const TagList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 8px;
  height: 24px;
`

export const TagItem = styled(motion.li)`
  transition: 0.3s ease;
`

export const TagButton = styled.button<{ colormode: ColorModeTypes }>`
  position: relative;
  border-radius: 4px;
  padding: 3px 6px;
  transition: 0.3s ease;
  ${({ theme }) => theme.fontStyle.desktop.text_sm};
  color: ${({ theme }) => theme.colors.gray.BLG900};
  letter-spacing: 0.5px;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
  ${({ colormode }) => {
    if (colormode === dark)
      return `
        &::after {
          content: ''
        }
      `
  }};

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`
