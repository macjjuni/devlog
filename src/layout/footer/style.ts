import styled from 'styled-components'
import { motion } from 'framer-motion'

export const FooterStyld = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.layout.footer};
  padding: 10px 16px;
`

export const UlStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  & > li {
    width: 24px;
    height: 24px;
    font-size: 0;
    margin-left: 14px;
  }
`

export const LinkStyled = styled(motion.a)`
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: 24px;
`
