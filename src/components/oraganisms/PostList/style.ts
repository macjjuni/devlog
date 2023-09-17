import styled from 'styled-components'
import { motion } from 'framer-motion'
import Link from 'next/link'
// import { ICateColor } from '@/styles/theme'

const PostStyled = {
  List: styled(motion.section)`
    color: ${({ theme }) => theme.color.BLG90};
  `,
  Item: styled(motion.article)`
    position: relative;
    width: 100%;
    padding: ${({ theme }) => `${theme.size.xl} ${theme.size.xs}`};
    border: 1px solid #000;
  `,
  Link: styled(Link)<{ $category?: string }>`
    position: relative;
  `,
  Cat: styled.h2`
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 600;
    line-height: 1.35;
  `,
  Title: styled.h3`
    font-size: ${({ theme }) => theme.fontSize.xl};
    line-height: 1.4;
    margin-top: ${({ theme }) => theme.size.sm};
  `,
  Date: styled.p`
    font-size: ${({ theme }) => theme.fontSize.md};
    margin-top: ${({ theme }) => theme.size.lg};
  `,
  Tags: styled.ul`
    padding: ${({ theme }) => theme.size.sm} 0;
  `,
  TagItem: styled.li`
    font-size: ${({ theme }) => theme.fontSize.md};
    display: inline-block;
  `,
}

export default PostStyled
