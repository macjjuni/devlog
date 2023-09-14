import { motion } from 'framer-motion'
import styled from 'styled-components'
import { menuActiveFrames } from '@/styles/keyframes'

const CategoryStyled = {
  Wrap: styled.section`
    margin-bottom: ${({ theme }) => theme.size.max};
  `,
  List: styled(motion.ul)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: ${({ theme }) => theme.size.max};
    list-style: none;
  `,
  Item: styled(motion.li)<{ active: string }>`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.category};
    line-height: 1.4;
    height: 60px;
    padding-left: 0;
    ${({ active }) => (active === 'active' ? menuActiveFrames : 'none')};
  `,
}

export default CategoryStyled
