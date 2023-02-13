import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Main = styled(motion.main)`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  // 100vh - ( header + footer )
  min-height: calc(100vh - (${({ theme }) => theme.layout.header} + ${({ theme }) => theme.layout.footer}));
  // 모바일 스타일
  @media ${({ theme }) => theme.device.mobile} {
    display: block;
  }
`

export const LeftWrap = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;

  // Mobile CSS
  @media ${({ theme }) => theme.device.mobile} {
    position: relative;
    top: auto;
    left: auto;
    width: 100%;
  }
`

export const RightWrap = styled(motion.section)`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  height: 100%;
  margin: 0;
  padding: 16px;
  // Mobile CSS
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    margin-top: -12px;
  }
`
