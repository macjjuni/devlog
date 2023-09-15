import styled from 'styled-components'
import { motion } from 'framer-motion'
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
    font-size: ${({ theme }) => theme.fontSize.category};
    ${({ active }) => (active === 'active' ? menuActiveFrames : 'none')};

    & > a {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 52px;
    }
  `,
}

export default CategoryStyled
