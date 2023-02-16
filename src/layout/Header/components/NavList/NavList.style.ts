import styled from 'styled-components'
import Link from 'next/link'
import { dark } from 'redux/slice/colorMode'
import type { ColorModeTypes } from 'type/theme'

export const Nav = styled.nav`
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`
export const NavList = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
`
export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
`
export const NavLink = styled(Link)<{ colormode: ColorModeTypes }>`
  position: relative;
  top: -1px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 5px 10px;
  font-style: italic;
  font-weight: bold;
  ${({ theme }) => theme.fontStyle.desktop.heading_sm};
  z-index: 1;
  &::after {
    content: '';
    position: absolute;
    bottom: 9px;
    left: 9px;
    width: 0px;
    height: 3px;
    transition: 0.3s ease;
    border-radius: 1px;
    background: ${({ theme, colormode }) => {
      if (colormode === dark) return theme.colors.gray.BLG400
      else return theme.colors.gray.BLG700
    }};
    z-index: -1;
  }
  &.active::after {
    width: calc(100% - 20px);
  }
`
