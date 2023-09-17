import styled from 'styled-components'
import { motion } from 'framer-motion'

const CategoryStyled = {
  Wrap: styled.section`
    margin-bottom: ${({ theme }) => theme.size.max};
  `,
  List: styled(motion.ul)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: ${({ theme }) => theme.size.max} 0;
    list-style: none;
  `,
  Item: styled(motion.li)`
    position: relative;
    font-size: ${({ theme }) => theme.fontSize.category};

    &[data-active='active'] {
      font-size: ${({ theme }) => theme.fontSize.categoryActive};
      font-weight: bold;
      ${({ theme }) =>
        theme.response.tablet(`
        font-size: ${theme.fontSize.max};
      `)}
    }

    &[data-active='origin'] {
      ${({ theme }) =>
        theme.response.tablet(`
        font-size: ${theme.fontSize.xxl};
      `)}
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
