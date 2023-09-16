import styled from 'styled-components'

const LogoStyled = styled.h1`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.max};
  font-family: 'Noto Sans';
  font-style: italic;
  font-weight: bold;

  & > a {
    display: inline-block;
    line-height: inherit;
    font-size: inherit;
  }
`

export default LogoStyled
