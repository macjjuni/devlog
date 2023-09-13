import styled from '@emotion/styled'

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.size.xxxl};
  margin-right: 56px;

  ${({ theme }) =>
    theme.response.tablet(`
      gap: ${theme.size.xxl};
  `)}

  ${({ theme }) =>
    theme.response.mobile(`
      gap: ${theme.size.md};
  `)}

  & > a {
    font-size: ${({ theme }) => theme.fontSize.lg};
    padding: ${({ theme }) => theme.size.sm};
  }
  & > a.active {
    font-weight: bold;
  }
`

export default NavbarStyled
