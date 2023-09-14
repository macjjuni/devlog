import styled from 'styled-components'

const BookStyled = {
  Item: styled.article`
    position: relative;
    width: 300px;
    height: 360px;
    margin: 0;
    transition: ${({ theme }) => theme.trs.md};

    &:hover {
      transform: scale(1.06) perspective(80px) rotateY(-1.2deg);
    }
    &:hover > span {
      right: -16px;
      height: calc(100% - 16px);
    }
    &:hover > span::after {
      transform: translateY(-50%) perspective(80px) rotateY(8deg);
    }
  `,
  Body: styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: ${({ theme }) => theme.size.xl};
    padding-left: ${({ theme }) => theme.size.xxxl};
    background-color: ${({ theme }) => theme.color.BLG300};
    border-top-left-radius: ${({ theme }) => theme.size.md};
    border-bottom-left-radius: ${({ theme }) => theme.size.md};
    border-top-right-radius: ${({ theme }) => theme.size.sm};
    border-bottom-right-radius: ${({ theme }) => theme.size.sm};

    box-shadow:
      rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    z-index: 10;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    &::after {
      left: 0;
      width: 30px;
      height: 100%;
      border-top-left-radius: ${({ theme }) => theme.size.md};
      border-bottom-left-radius: ${({ theme }) => theme.size.md};
      opacity: 0.5;
      background: linear-gradient(
          90deg,
          hsla(0, 0%, 100%, 0),
          hsla(0, 0%, 100%, 0) 12%,
          hsla(0, 0%, 100%, 0.25) 29.25%,
          hsla(0, 0%, 100%, 0) 50.5%,
          hsla(0, 0%, 100%, 0) 75.25%,
          hsla(0, 0%, 100%, 0.25) 91%,
          hsla(0, 0%, 100%, 0)
        ),
        linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.03),
          rgba(0, 0, 0, 0.1) 12%,
          transparent 30%,
          rgba(0, 0, 0, 0.02) 50%,
          rgba(0, 0, 0, 0.2) 73.5%,
          rgba(0, 0, 0, 0.5) 75.25%,
          rgba(0, 0, 0, 0.15) 85.25%,
          transparent
        );
    }
  `,
  Side: styled.span`
    &,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: -1;
    }

    right: 2px;
    background-color: ${({ theme }) => theme.color.BLG300};
    border-top-right-radius: ${({ theme }) => theme.size.sm};
    border-bottom-right-radius: ${({ theme }) => theme.size.sm};
    width: 50px;
    height: 100%;
    transition: ${({ theme }) => theme.trs.md};

    &::after {
      background-color: ${({ theme }) => theme.color.BLG0};
      right: 5px;
      width: 100%;
      height: 100%;
      transition: ${({ theme }) => theme.trs.md};
    }
  `,
  Title: styled.h2`
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    font-weight: bold;
    line-height: 1.25;
    color: ${({ theme }) => theme.color.BLG1000};
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  `,
}

export default BookStyled
