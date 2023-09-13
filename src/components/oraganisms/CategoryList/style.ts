import { motion } from 'framer-motion'
import styled from '@emotion/styled'

const CategoryListStyled = {
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
}

export default CategoryListStyled
