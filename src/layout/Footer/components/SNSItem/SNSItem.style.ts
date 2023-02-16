import styled from 'styled-components'
import { motion } from 'framer-motion'
import { blinkEffect } from 'layout/Footer/Footer.style'

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
