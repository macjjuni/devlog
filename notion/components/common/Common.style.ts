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
  ${({ theme }) => theme.fontStyle.desktop.text_lg};
  border: 1px solid ${({ theme }) => theme.colors.gray.BLG400};
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

export const CategoryWrap = styled.aside`
  margin-bottom: 20px;
`

export const Category = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  height: 60px;
`

export const CategoryItem = styled.li`
  border: 1px solid #000;
  padding: 8px;
  border-radius: 4px;
`
