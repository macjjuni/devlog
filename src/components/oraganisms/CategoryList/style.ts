import styled from 'styled-components'
import { motion } from 'framer-motion'

const CategoryStyled = {
  Wrap: styled.section`
    margin-bottom: ${({ theme }) => theme.size.max};
    margin: 0;
  `,
  List: styled(motion.ul)`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: ${({ theme }) => theme.size.lg};
    padding: ${({ theme }) => theme.size.max} 0;
    list-style: none;
  `,
  Item: styled(motion.li)`
    position: relative;
    font-size: ${({ theme }) => theme.fontSize.lg};

    &[data-active='active'] {
      font-size: ${({ theme }) => theme.fontSize.xl};
      font-weight: bold;
    }

    & > a {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 52px;
    }
  `,
}

export default CategoryStyled
