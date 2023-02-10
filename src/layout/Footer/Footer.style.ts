import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import { ColorModeTypes } from 'type/theme'
import { light } from 'redux/slice/colorMode'

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.layout.footer};
  padding: 16px;
`

export const SNSList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`

const blinkEffect = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1;}
`

export const SNSItem = styled.li`
  font-size: 0;
  padding: 8px;
  margin-left: 14px;
  border-radius: 50%;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
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
    bottom: -2px;
    right: -2px;
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.system.SUCCESS};
    border-radius: 50%;
    animation: ${blinkEffect} 0.95s ease-in-out infinite alternate;
  }
`

export const SVGStyled = styled.svg<{ colorMode: ColorModeTypes }>`
  fill: ${({ colorMode }) => {
    if (colorMode === light) return '#000'
    return '#fff'
  }};
  transition: 0.3s ease;
`
