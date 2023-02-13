import styled from 'styled-components'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const Logo = styled(motion(Link))`
  display: inline-block;
  font-size: 28px;
  font-family: 'Single Day', 'cursive';
  white-space: nowrap;
`
