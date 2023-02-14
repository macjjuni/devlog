import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import { type ColorModeTypes } from 'type/theme'
import { dark } from 'redux/slice/colorMode'

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.layout.desktop.footer};
  padding: 16px;
  @media ${({ theme }) => theme.device.mobile} {
    height: ${({ theme }) => theme.layout.mobile.footer};
  }
`

export const SNSList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  & > li:first-child > a > svg {
    width: 30px;
    height: 30px;
  }
  & > li:nth-child(2) > a > svg {
    width: 25px;
    height: 25px;
  }
  & > li:last-child > a > svg {
    width: 30px;
    height: 30px;
  }
`

const blinkEffect = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1;}
`

export const SNSItem = styled.li<{ colorMode: ColorModeTypes }>`
  font-size: 0;
  width: 42px;
  height: 42px;
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

export const SNSLink = styled(motion.a)`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 24px;

  &::after {
    content: '';
    position: absolute;
    bottom: 6px;
    right: 6px;
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.system.SUCCESS};
    border-radius: 50%;
    animation: ${blinkEffect} 0.95s ease-in-out infinite alternate;
  }
`

export const SVGStyled = styled.svg<{ colorMode: ColorModeTypes }>`
  fill: ${({ colorMode }) => {
    if (colorMode === dark) return '#fff'
    return '#000'
  }};
  transition: 0.3s ease;
`
