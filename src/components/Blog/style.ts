import styled from 'styled-components'

export const BlogWrap = styled.div`
  display: flex;
  height: 200px;
  margin-top: 20px;
  overflow-x: auto;
  scroll-snap-type: x proximity;
`

export const ArticleWrap = styled.article`
  position: relative;
  flex: none;
  width: 250px;
  height: 180px;
  padding: 0;
  margin-right: 20px;
  border-radius: 6px;
  scroll-snap-align: center;
  overflow: hidden;

  @media ${({ theme }) => theme.device.mobile} {
    width: 260px;
  }

  &:last-child {
    margin: 0;
  }

  & > a > img {
    width: 100%;
    height: 100%;
  }

  & > a {
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

    & > .post-title {
      opacity: 0;
      position: absolute;
      bottom: 2px;
      left: 10px;
      width: calc(100% - 10px);
      color: #fff;
      font-family: 'NanumBarunGothic';
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      transition: 0.3s ease;
      z-index: 1;
    }

    & > .post-date {
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
    }

    &:hover {
      &::after {
        background-color: rgba(0, 0, 0, 0.4);
      }
      & > .post-date,
      & > .post-title {
        opacity: 1;
      }
    }
  }
`
