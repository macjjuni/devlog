import styled from 'styled-components'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const Logo = styled(motion(Link))`
  position: relative;
  display: inline-block;
  font-size: 28px;
  font-style: italic;
  font-weight: bold;
  white-space: nowrap;
  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    right: -6px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.system.ERROR};
  }
`
export const LogoSpan = styled.span`
  color: ${({ theme }) => theme.colors.system.ERROR};
`
