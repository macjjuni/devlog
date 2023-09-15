import styled from 'styled-components'

const CateStyled = styled.h4`
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.max};
  font-weight: bold;
  font-style: italic;
  color: ${({ theme }) => theme.color.BLG0};
  line-height: 1.3;
  &:after {
    content: '';
    position: absolute;
    bottom: -${({ theme }) => theme.size.xl};
    left: 0;
    width: 120px;
    height: 2px;
    background-color: #fff;
  }
`

const Cate = ({ $category }: { $category?: string }) => {
  return <CateStyled>{$category}</CateStyled>
}

export default Cate
