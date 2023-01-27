import styled from 'styled-components'

export const HeaderStyled = styled.header`
  height: 70px;
  padding: 0 16px;
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h1 > a > img {
    border-radius: 50%;
    transition: 0.3s ease;
    border: 1px solid #fff;
  }

  & > nav {
    margin: 0;

    & > ul {
      padding: 0;
      display: flex;
      align-items: center;

      & > li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        overflow: hidden;
      }

      & > li > a {
        position: relative;
        display: inline-block;
        height: 40px;
        color: ${({ theme }) => theme.colors.gray.BLG900};
        ${({ theme }) => theme.fontStyle.pc.heading_sm};
        transition: 0.3s ease-in;
      }
      /* & > li > a.active {
        transform: scale(1.05);
      } */
      & > li > a::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: -5px;
        width: 0px;
        height: 2px;
        background: ${({ theme }) => theme.colors.gray.BLG700};
        transition: 0.3s ease;
      }
      & > li > a.active::after {
        width: calc(100% + 8px);
        height: 3px;
      }
    }
  }
`
