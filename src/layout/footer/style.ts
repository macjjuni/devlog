import { LayoutStyled } from './../style'
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
    padding: 6px;
    font-size: 0;
    margin-left: 14px;
    border-radius: 50%;
    transition: box-shadow 0.3s ease;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    }
  }
`

export const LinkStyled = styled(motion.a)`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 24px;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.system.SUCCESS};
    border-radius: 50%;
  }
`
