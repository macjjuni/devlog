import styled from 'styled-components'

export const HeaderStyled = styled.header`
  height: 70px;
  padding: 0 16px;
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a > img {
    border-radius: 50%;
    transition: 0.3s ease;
    border: 1px solid #fff;
    &:hover {
      transform: rotate(15deg);
    }
  }

  & > nav {
    margin: 0;

    & > ul {
      padding: 0;
      display: flex;
      align-items: center;

      & a {
        padding: 10px 16px;
        font-size: ${({ theme }) => theme.fontStyle.pc.heading_sm};
      }
    }
  }
`
