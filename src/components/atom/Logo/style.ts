import styled from '@emotion/styled'

const LogoStyled = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.max};
  font-family: 'Noto Sans';
  font-style: italic;
  font-weight: bold;
  line-height: 1;
  height: inherit;

  & > a {
    line-height: inherit;
    font-size: inherit;
  }
`

export default LogoStyled
