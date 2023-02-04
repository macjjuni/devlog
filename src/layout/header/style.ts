import styled from 'styled-components'

export const HeaderStyled = styled.header`
  height: ${({ theme }) => theme.layout.header};
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .logo-h1 > .logo-a {
    display: inline-block;
    font-size: 28px;
    font-family: 'Single Day', 'cursive';
    white-space: nowrap;
  }

  & > .header-nav {
    margin: 0;

    & > .nav-list {
      padding: 0;
      display: flex;
      align-items: center;

      & > .nav-link {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 15px;
      }

      & > .nav-link > a {
        position: relative;
        top: -1px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        padding: 5px 10px;
        ${({ theme }) => theme.fontStyle.pc.heading_sm};
        transition: 0.3s ease-in;
      }

      & > .nav-link > a::after {
        content: '';
        position: absolute;
        bottom: 4px;
        left: 10px;
        width: 0px;
        height: 3px;
        transition: 0.3s ease;
        background: ${({ theme }) => theme.colors.gray.BLG700};
      }
      & > .nav-link > a.active::after {
        width: calc(100% - 20px);
      }
    }

    @media ${({ theme }) => theme.device.mobile} {
      display: none;
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
