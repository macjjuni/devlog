import styled from 'styled-components'

const FooterStyled = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.size.footer};
  font-size: ${({ theme }) => theme.fontSize.sm};
`

export default FooterStyled
