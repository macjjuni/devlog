import styled from 'styled-components'
import Text from 'components/common/Text'

export const Blog = styled.div`
  margin-top: 40px;
`

export const BlogWrap = styled.div`
  display: flex;
  padding: 18px 0;
  overflow-x: auto;
  scroll-snap-type: none;
`

export const Article = styled.article`
  position: relative;
  flex: none;
  width: 250px;
  height: 170px;
  padding: 0;
  margin-right: 20px;
  border-radius: 6px;
  scroll-snap-align: center;
  overflow: hidden;

  &:last-child {
    margin: 0;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 260px;
  }
`

export const BlogLink = styled.a`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.3s ease;
  }
  &:hover {
    &::after {
      background-color: rgba(0, 0, 0, 0.4);
    }
    & h3,
    & span {
      opacity: 1;
    }
  }

  & > img {
    width: 100%;
    height: 100%;
  }
`

export const BlogTitle = styled(Text)`
  opacity: 0;
  position: absolute;
  bottom: 4px;
  left: 8px;
  width: calc(100% - 10px);
  color: #fff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: 0.3s ease;
  z-index: 1;
`

export const BlogDate = styled(Text)`
  position: absolute;
  top: 10px;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10px;
  font-family: 'NanumBarunGothic';
  font-weight: bold;
  color: #fff;
  opacity: 0;
  transition: 0.3s ease;
  z-index: 1;
  & > svg {
    font-size: 24px;
  }
  & > span {
    position: relative;
    top: 2px;
  }
`
