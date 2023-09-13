import styled from '@emotion/styled'
import Link from 'next/link'
import { motion } from 'framer-motion'

const PostItemStyled = {
  Wrap: styled(motion.article)`
    position: relative;
  `,
  Link: styled(Link)<{ category: string }>`
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
    background-color: ${({ theme, category }) => {
      const target = theme.categoryColor.find((cate) => cate.key === category.toLocaleLowerCase() || cate.key === 'default')
      if (target) return target.color
      return '#eee'
    }};
    &:hover {
      transform: scale(1.03);
    }
  `,
  TopWrap: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  `,
}

export default PostItemStyled
