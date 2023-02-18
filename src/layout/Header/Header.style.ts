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
  z-index: 100;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);

  & > .mobile-nav {
    display: none;
  }
  /* @media ${({ theme }) => theme.device.mobile} {
    height: ${({ theme }) => theme.layout.mobile.header};
    & > .mobile-nav {
      display: flex;
    }
  } */
`
