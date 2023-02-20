import styled from 'styled-components'

export const PageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-top: 20px;
  padding: 20px 0;
`

export const PageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  padding: 4px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  ${({ theme }) => theme.fontStyle.desktop.text_lg};

  color: ${({ theme }) => theme.colors.gray.BLG500};

  &.active {
    color: ${({ theme }) => theme.colors.primary.MAIN};
    border-color: ${({ theme }) => theme.colors.primary.MAIN};
    cursor: default;
  }

  &:disabled {
    cursor: no-drop;
    background: ${({ theme }) => theme.colors.gray.BLG100};
  }
`
