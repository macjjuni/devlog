import styled from '@emotion/styled'

const MainStyled = styled.main`
  // 메인 데스크탑 최소 높이
  min-height: calc(
    ${({ theme }) => theme.size.main} - (${({ theme }) => theme.size.header} + ${({ theme }) => theme.size.footer} + ${({ theme }) => theme.size.max})
  );
  ${({ theme }) =>
    theme.response.tablet(`
      min-height: calc(${theme.size.main} - (${theme.size.header} + ${theme.size.footer} + ${theme.size.lg} + ${theme.size.lg}));
      padding-top: calc(${theme.size.header} + ${theme.size.lg});
    `)}
`

export default MainStyled
