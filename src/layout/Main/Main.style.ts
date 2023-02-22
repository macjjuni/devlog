import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Main = styled(motion.main)`
  position: relative;
  min-height: calc(100vh - (${({ theme }) => theme.layout.desktop.header} + ${({ theme }) => theme.layout.desktop.footer}));

  & > section {
    min-height: ${({ theme }) => theme.layout.desktop.main};
    padding: 16px;
  }

  // 모바일 스타일
  @media ${({ theme }) => theme.device.mobile} {
    display: block;
    min-height: calc(100vh - (${({ theme }) => theme.layout.mobile.header} + ${({ theme }) => theme.layout.mobile.footer}));
  }
`
