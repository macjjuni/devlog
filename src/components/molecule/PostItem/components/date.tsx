import styled from '@emotion/styled'

const DateStyled = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.color.BLG0};
  font-weight: bold;
  margin: 0;
`

const Date = ({ text }: { text: string }) => {
  return <DateStyled>{text}</DateStyled>
}

export default Date
