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

export const VexelWrap = styled.section`
  position: fixed;
  top: 50%;
  left: calc((100vw - 1200px) / 2);
  transform: translateY(-50%);
  width: 600px;
  height: 600px;
  // Mobile CSS
  @media screen and (max-width: 1200px) {
    left: 0;
    width: calc(100vw / 2);
  }
  @media ${({ theme }) => theme.device.mobile} {
    position: relative;
    top: auto;
    left: auto;
    width: 100%;
    height: 250px;
    transform: none;
  }
`

export const MotionWrap = styled(motion.section)`
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
