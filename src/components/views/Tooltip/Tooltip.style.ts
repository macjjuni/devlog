import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Tooltip = styled(motion.div)`
  position: absolute;
  bottom: calc(100% + 5px);
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 30px;
  transform: translateX(-50%);
  padding: 2px 8px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.gray.BLG200};
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-bottom: 8px solid transparent;
    border-top: 8px solid transparent;
    border-left: 10px solid ${({ theme }) => theme.colors.gray.BLG200};
    border-right: 10px solid transparent;
    left: 50%;
    top: 31px;
    transform: translateX(-50%) rotate(90deg);
    z-index: 0;
  }
`

export const TooltipText = styled.span``
