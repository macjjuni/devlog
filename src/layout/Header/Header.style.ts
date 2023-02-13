import styled from 'styled-components'

export const Header = styled.header`
  position: sticky;
  top: 0px;
  height: ${({ theme }) => theme.layout.desktop.header};
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  z-index: 1;
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  @media ${({ theme }) => theme.device.mobile} {
    height: ${({ theme }) => theme.layout.mobile.header};
  }
`
