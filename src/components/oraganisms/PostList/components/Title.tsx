import styled from 'styled-components'

const TitleStyled = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.postTitle};
  font-weight: 600;
  color: ${({ theme }) => theme.color.BLG0};
  margin-bottom: 120px;

  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`

const Title = ({ text }: { text: string }) => {
  return <TitleStyled>{text}</TitleStyled>
}

export default Title