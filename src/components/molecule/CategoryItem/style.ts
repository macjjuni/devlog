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
    padding-left: 16px;
    text-decoration-line: underline;
    text-decoration-thickness: 4px;
    text-underline-offset: 4px;
  }
`

const aniActive = css`
  animation: ${activeMenu} 0.4s ease forwards;
`

const CategoryItemStyled = styled(motion.li)<{ active: string }>`
  position: relative;
  display: inline-block;
  width: auto;
  font-size: ${({ theme }) => theme.fontSize.category};
  padding-left: 0;
  height: 60px;

  ${({ active }) => (active === 'active' ? aniActive : 'none')};
`
export default CategoryItemStyled
