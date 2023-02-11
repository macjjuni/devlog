import styled from 'styled-components'
import { motion } from 'framer-motion'
import { type ColorModeTypes } from 'type/theme'
import { light } from 'redux/slice/colorMode'

export const Tooltip = styled(motion.div)<{ colormode: ColorModeTypes }>`
  position: absolute;
  bottom: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
  padding: 2px 8px;
  border-radius: 4px;
  background: ${({ theme, colormode }) => {
    if (colormode === light) return theme.colors.gray.BLG200
    return theme.colors.gray.BLG600
  }};
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-bottom: 8px solid transparent;
    border-top: 8px solid transparent;
    border-left: 10px solid
      ${({ theme, colormode }) => {
        if (colormode === light) return theme.colors.gray.BLG200
        return theme.colors.gray.BLG600
      }};
    border-right: 10px solid transparent;
    left: 50%;
    top: 31px;
    transform: translateX(-50%) rotate(90deg);
    z-index: 0;
  }
`
