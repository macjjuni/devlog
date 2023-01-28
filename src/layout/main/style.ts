import styled from 'styled-components'
import { motion } from 'framer-motion'

export const MainStyled = styled(motion.main)`
  min-height: ${({ theme }) => theme.layout.main};
  padding: 16px;
`

export const MainAnimation = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 30,
  },
  transition: {
    ease: [0.17, 0.67, 0.83, 0.67],
    duration: 0.3,
  },
}
