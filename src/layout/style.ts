import styled from 'styled-components'
import { deviceSizes } from '../styles/theme'

export const LayoutStyled = styled.div`
  position: relative;
  max-width: ${deviceSizes.laptop};
  min-height: 100vh;
  position: relative;
  padding-bottom: ${({ theme }) => theme.layout.footer};
`
