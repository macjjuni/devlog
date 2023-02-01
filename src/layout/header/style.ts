import styled from 'styled-components'

export const HeaderStyled = styled.header`
  height: ${({ theme }) => theme.layout.header};
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h1 > a {
    display: inline-block;
    font-size: 24px;
    font-family: 'Single Day', 'cursive';
    white-space: nowrap;
  }

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

      & > li.nav-link {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 15px;
      }

      & > li.nav-link > a {
        position: relative;
        top: -3px;
        display: inline-block;
        height: 40px;
        padding: 5px 10px;
        ${({ theme }) => theme.fontStyle.pc.heading_sm};
        transition: 0.3s ease-in;
      }
      & > li.nav-link > a::after {
        content: '';
        position: absolute;
        bottom: 0px;
        left: 5px;
        width: 0px;
        height: 2px;
        transition: 0.3s ease;
        background: ${({ theme }) => theme.colors.gray.BLG700};
      }
      & > li.nav-link > a.active::after {
        width: calc(100% - 10px);
        height: 2px;
      }
    }
  }
`
export const ToggleItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-left: 6px;
`
export const ButtonStyled = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  & > svg {
    color: '#000';
  }
  & > svg:hover {
  }
`
