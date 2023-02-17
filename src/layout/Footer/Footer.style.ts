import styled, { keyframes } from 'styled-components'

export const blinkEffect = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1;}
`
export const Footer = styled.footer`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.layout.desktop.footer};
  padding: 16px;
  ${({ theme }) => theme.fontStyle.desktop.text_md};
  font-style: italic;
  @media ${({ theme }) => theme.device.mobile} {
    height: ${({ theme }) => theme.layout.mobile.footer};
  }
`
