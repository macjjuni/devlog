import styled from 'styled-components'
import { motion } from 'framer-motion'

export const MainStyled = styled(motion.main)`
  min-height: ${({ theme }) => theme.layout.main};
  padding: 16px;
`

export const MainAnimation = {
  initial: {
    opacity: 0,
    x: 25,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    type: 'spring',
    duration: 0.2,
  },
}
