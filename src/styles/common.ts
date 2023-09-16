import styled from 'styled-components'

export const PageStyled = {
  Wrap: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;

    // 메인 데스크탑 최소 높이
    min-height: calc(
      ${({ theme }) => theme.size.main} - (${({ theme }) => theme.size.header} + ${({ theme }) => theme.size.footer} + ${({ theme }) => theme.size.max})
    );

    ${({ theme }) =>
      theme.response.tablet(`
      min-height: calc(${theme.size.main} - (${theme.size.header} + ${theme.size.footer} + ${theme.size.lg} + ${theme.size.lg} + ${theme.size.lg}));
    `)}
  `,
  Left: styled.div`
    width: 26%;
  `,
  Right: styled.div`
    width: 74%;
  `,
}

export const DetailPageStyled = {
  Wrap: styled.div`
    max-width: 1100px;
    margin: 0 auto;
  `,
}
