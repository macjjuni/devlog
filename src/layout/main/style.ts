import styled from 'styled-components'
import { motion } from 'framer-motion'

export const MainStyled = styled(motion.main)`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  // 100vh - ( header + footer )
  height: calc(100vh - (${({ theme }) => theme.layout.header} + ${({ theme }) => theme.layout.footer}));
  // 모바일 스타일
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
  }
`

export const SectionStyled = styled.section`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  height: 100%;
  margin: 0;
  // 모바일 스타일
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`

export const MotionStyled = styled(motion(SectionStyled))`
  padding: 16px;
`
