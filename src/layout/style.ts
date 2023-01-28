import styled from 'styled-components'
import { deviceSizes } from '../styles/theme'

export const LayoutStyled = styled.div`
  max-width: ${deviceSizes.laptop};
  min-height: 100vh;
  position: relative;
  padding-bottom: ${({ theme }) => theme.layout.footer};
`

export const SkillSection = styled.section``
