import styled from 'styled-components'
import { motion } from 'framer-motion'

export const TagList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

export const TagItem = styled(motion.li)`
  transition: 0.3s ease;
`

export const TagButton = styled.button`
  border-radius: 4px;
  padding: 2px 6px;
  transition: 0.3s ease;
  ${({ theme }) => theme.fontStyle.desktop.text_sm};

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`
