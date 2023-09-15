import styled from 'styled-components'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ICateColor } from '@/styles/theme'

const PostStyled = {
  List: styled(motion.section)`
    display: flex;
    flex-wrap: nowrap;
    justify-content: start;
    align-items: center;
    overflow-y: auto;
    gap: ${({ theme }) => theme.size.xxxxl};
    margin-bottom: ${({ theme }) => theme.size.max};
    margin-right: -${({ theme }) => theme.size.max};
    padding: ${({ theme }) => theme.size.xxxl};
  `,
  Item: styled(motion.article)`
    position: relative;
  `,
  TopWrap: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  `,
  Link: styled(Link)<{ $category?: string }>`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 440px;
    padding: ${({ theme }) => theme.size.xl};
    transition: transform ${({ theme }) => theme.trs.sm};
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: ${({ theme }) => theme.size.sm};
    background-color: ${({ theme, $category }) => {
      if (!$category) return '#eee'
      const target = theme.categoryColor.find((cate: ICateColor) => cate.key === $category.toLocaleLowerCase() || cate.key === 'default')
      if (target) return target.color
      return '#eee'
    }};
    &:hover {
      transform: scale(1.03);
    }
  `,
}

export default PostStyled
