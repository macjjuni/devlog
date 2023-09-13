import styled from '@emotion/styled'

interface IHeaderStyled {
  isHide: boolean
}

const HeaderStyled = styled.header<IHeaderStyled>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.size.header};
  transform: translateY(${({ isHide }) => (isHide ? '-100px' : '0')});
  transition: transform ${({ theme }) => theme.trs.sm};
  background: ${({ theme }) => theme.color.BLG0};
  z-index: 100;

  ${({ theme }) =>
    theme.response.tablet(`
      position: fixed;
      top: 0;
      left: 0;
      padding: ${theme.size.lg};
      width: calc(100% - (${theme.size.lg} + ${theme.size.lg}));
    `)};
`

export default HeaderStyled
