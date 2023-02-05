import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'

export const CanvasStyled = styled(Canvas)`
  opacity: 0;
  transition: opacity 1s ease;
  &.show-voxel {
    opacity: 1;
  }
`
