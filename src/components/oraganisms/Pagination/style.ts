import styled, { css } from 'styled-components'
import Link from 'next/link'

const hoverCss = css`
  text-decoration-line: underline;
  text-decoration-color: inherit;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
`

const buttonCSS = css`
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  color: inherit;
  font-size: ${({ theme }) => theme.fontSize.lg};
  padding: ${({ theme }) => theme.size.lg};
  margin: 0;
  background-color: transparent;
  border: none;
  outline: none;

  &:hover {
    ${hoverCss}
  }
`

const PagiStyled = {
  Wrap: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 500px;
    margin: 0;
    gap: ${({ theme }) => theme.size.xxlg};
  `,
  Button: styled(Link)`
    ${buttonCSS}
  `,
  ActiveButton: styled.button`
    ${buttonCSS}
    ${hoverCss}
    font-weight: bold;
  `,
  DisabledButton: styled.button`
    ${buttonCSS}
    color: ${({ theme }) => theme.color.BLG500};
    cursor: not-allowed;
  `,
}

export default PagiStyled
