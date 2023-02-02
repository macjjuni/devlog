import styled from 'styled-components'
import { motion } from 'framer-motion'

export const MainStyled = styled(motion.main)`
  min-height: ${({ theme }) => theme.layout.main};
  padding: 16px;
`
