import { tooltipHoverFrames, tooltipUnHoverFrames } from '@/styles/keyframes'
import styled from 'styled-components'
import { ITooltip } from '.'

const TooltipStyled = styled.div<ITooltip>`
  display: ${({ $text }) => ($text !== '' ? 'block' : 'none')};

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
    ${tooltipHoverFrames};
  }
  &.noActive {
    ${tooltipUnHoverFrames};
  }
`

export default TooltipStyled
