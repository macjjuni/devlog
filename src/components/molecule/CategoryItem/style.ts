import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import { motion } from 'framer-motion'

const activeMenu = keyframes`
  from {
    font-size: 38px;
    font-weight: 400;
    padding-left: 0;
    text-decoration-line: none;
  }
  to {
    font-size: 42px;
    font-weight: bold;
    text-decoration-line: underline;
    text-decoration-thickness: 4px;
    text-underline-offset: 4px;
  }
`

const aniActive = css`
  animation: ${activeMenu} 0.4s ease forwards;
`

const CategoryItemStyled = styled(motion.li)<{ active: string; category: string }>`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.category};
  line-height: 1.4;
  height: 60px;
  padding-left: 0;

  ${({ active }) => (active === 'active' ? aniActive : 'none')};
`

export default CategoryItemStyled
