import styled from 'styled-components'
import { deviceSizes } from '../styles/theme'

export const Layout = styled.div`
  position: relative;
  max-width: ${deviceSizes.laptop};
  min-height: 100vh;
  margin: 0 auto;
  padding-bottom: ${({ theme }) => theme.layout.footer};
  /* overflow: auto; */
`
