import styled from 'styled-components'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ICateColor } from '@/styles/theme'

const BookStyled = {
  Item: styled(motion.article)`
    position: relative;
    width: 300px;
    height: 360px;
  `,
  Wrap: styled.div`
    position: relative;
    margin: 0;
    color: ${({ theme }) => theme.color.BLG0};
    border-top-left-radius: ${({ theme }) => theme.size.md};
    border-bottom-left-radius: ${({ theme }) => theme.size.md};
    border-top-right-radius: ${({ theme }) => theme.size.sm};
    border-bottom-right-radius: ${({ theme }) => theme.size.sm};
    box-shadow:
      rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    transition: ${({ theme }) => theme.trs.md};

    &:hover {
      transform: scale(1.06) perspective(80px) rotateY(-1.2deg);
      /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
      box-shadow:
        rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
    &:hover > span {
      right: -16px;
      height: calc(100% - 16px);
    }
    &:hover > span::after {
      transform: translateY(-50%) perspective(80px) rotateY(8deg);
      height: calc(100% - 2px);
    }
  `,
  Body: styled(Link)<{ $category?: string }>`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 300px;
    height: 360px;
    padding: ${({ theme }) => theme.size.xl};
    padding-left: ${({ theme }) => theme.size.xxxl};
    border-top-left-radius: ${({ theme }) => theme.size.md};
    border-bottom-left-radius: ${({ theme }) => theme.size.md};
    border-top-right-radius: ${({ theme }) => theme.size.sm};
    border-bottom-right-radius: ${({ theme }) => theme.size.sm};
    overflow: hidden;
    background-color: ${({ theme }) => theme.color.BookBg};

    z-index: 10;
  `,
  LeftSide: styled.span`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 30px;
    height: 100%;
    border-top-left-radius: ${({ theme }) => theme.size.md};
    border-bottom-left-radius: ${({ theme }) => theme.size.md};
    opacity: 0.3;
    /* transition: background ${({ theme }) => theme.trs.md}; */
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
        rgba(0, 0, 0, 0.2) 75.25%,
        rgba(0, 0, 0, 0.15) 85.25%,
        transparent
      );
  `,
  RightSide: styled.span<{ $category?: string }>`
    &,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: -1;
    }

    right: 2px;
    background-color: ${({ theme }) => theme.color.BookBg};
    border-top-right-radius: ${({ theme }) => theme.size.sm};
    border-bottom-right-radius: ${({ theme }) => theme.size.sm};
    width: 30px;
    height: 99%;
    transition: ${({ theme }) => theme.trs.md};

    &::after {
      background-color: ${({ theme }) => theme.color.BLG0};
      right: 6px;
      width: 100%;
      height: 100%;
      transition: ${({ theme }) => theme.trs.md};
    }
  `,
  TopWrap: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: ${({ theme }) => theme.size.sm};
  `,
  Title: styled.h3`
    font-size: ${({ theme }) => theme.fontSize.xxl};
    color: ${({ theme }) => theme.color.BLG0};
    font-weight: bold;
    line-height: 1.45;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    text-shadow: 0px 1px 1px rgba(255, 255, 255, 0.2);
  `,
  Cat: styled.h2<{ $category?: string }>`
    position: relative;
    font-size: ${({ theme }) => theme.fontSize.max};
    font-weight: bold;
    line-height: 1.45;
    text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.25);
    color: ${({ theme, $category }) => {
      if (!$category) return theme.categoryColor[theme.categoryColor.length - 1].color
      const target = theme.categoryColor.find((cate: ICateColor) => cate.key === $category.toLocaleLowerCase() || cate.key === 'default')
      if (target) return target.color
      return theme.categoryColor[theme.categoryColor.length - 1].color
    }};

    &::after {
      /* content: ''; */
      position: absolute;
      bottom: -${({ theme }) => theme.size.xl};
      left: 0;
      width: 60px;
      height: 1px;
      background-color: ${({ theme }) => theme.color.BLG0};
    }
  `,
  Date: styled.span`
    font-size: ${({ theme }) => theme.fontSize.lg};
    margin-bottom: ${({ theme }) => theme.size.md};
    text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.2);
  `,
  Svg: styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 125px;
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
}

export default BookStyled
