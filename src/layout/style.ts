import styled from 'styled-components'
import { deviceSizes } from '../styles/theme'

export const LayoutStyled = styled.div`
  max-width: ${deviceSizes.laptop};
  min-height: 100vh;
  position: relative;
  border: 1px solid #fff;
  padding-bottom: 50px;
`
