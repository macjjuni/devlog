import styled from 'styled-components'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ColorModeTypes } from 'type/theme'
import { dark } from 'redux/slice/colorMode'

export const Header = styled.header`
  height: ${({ theme }) => theme.layout.header};
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`

export const Logo = styled(motion(Link))`
  display: inline-block;
  font-size: 28px;
  font-family: 'Single Day', 'cursive';
  white-space: nowrap;
`

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
  ${({ theme }) => theme.fontStyle.pc.heading_md};

  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 10px;
    width: 0px;
    height: 3px;
    transition: 0.3s ease;
    border-radius: 2px;
    background: ${({ theme, colormode }) => {
      if (colormode === dark) return theme.colors.gray.BLG400
      else return theme.colors.gray.BLG700
    }};
  }
  &.active::after {
    width: calc(100% - 20px);
  }
`

export const Toggle = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-left: 6px;
`
export const ToggleButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  & > svg {
    color: '#000';
  }
  & > svg:hover {
  }
`

export const MobileNav = {
  Wrap: styled.div`
    position: relative;
  `,
  Button: styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    transition: 0.3s ease;
    & > svg {
      color: ${({ theme }) => theme.colors.gray.BLG800};
    }
    &:hover,
    &:focus,
    &:active {
      box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    }
  `,
  MenuWrap: styled.ul`
    position: absolute;
    top: calc(100% + 15px);
    right: 0;
    border: 1px solid #000;
    background-color: inherit;
    width: 200px;
    z-index: 1;
  `,
  MenuItem: styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  `,
}
