import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

interface ITooltipStyled {
  show: boolean
  text: string
}

const hoverEffect = keyframes`
  0% {
    top: 0%;
  }
  10% {
    top: 90%;
  }
  100% {
    top: 118%;
    opacity: 1;
  }
`
const unHoverEffect = keyframes`
  0% {
    top: 118%;
    opacity: 1;
  }
  90% {
    top: 90%;
    opacity: 0;
  }
  100% {
    top: 0%;
    opacity: 0;
  }
`

const TooltipStyled = styled.div<ITooltipStyled>`
  display: ${({ text }) => (text !== '' ? 'block' : 'none')};

  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  padding: 2px 6px;
  border-radius: 2px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.66);
  white-space: nowrap;
  opacity: 0;
  transition: 0.2s ease;
  z-index: -1;

  &.active {
    animation: ${hoverEffect} 0.2s ease-in-out forwards;
  }
  &.noActive {
    animation: ${unHoverEffect} 0.16s ease-in-out forwards;
  }
`

export default TooltipStyled
