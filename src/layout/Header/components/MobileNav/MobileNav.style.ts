import styled from 'styled-components'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { ColorModeTypes } from 'type/theme'
import { dark } from 'redux/slice/colorMode'

export const MobileNav = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavToggleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-left: 10px;
`

export const NavWrap = styled(motion.div)`
  position: absolute;
  top: 55px;
  right: 5px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  overflow: hidden;
`

export const NavList = styled.ul<{ colorMode: ColorModeTypes }>`
  & > li {
    transition: border 0.3s ease;
    border-bottom: 1px solid
      ${({ colorMode, theme }) => {
        if (colorMode === dark) {
          return theme.colors.gray.BLG600
        }
        return theme.colors.gray.BLG400
      }};
  }
  & > li:last-child {
    border-bottom: none;
  }
  transition: background-color 0.3s ease;
  background-color: ${({ colorMode, theme }) => {
    if (colorMode === dark) {
      return theme.colors.gray.BLG700
    }
    return theme.colors.gray.BLG100
  }};
`

export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 54px;
`
export const NavLink = styled(Link)`
  ${({ theme }) => theme.fontStyle.desktop.heading_lg}
  width: 100%;
  text-align: center;
`
