import styled from 'styled-components'
import { Canvas as CanvasFiber } from '@react-three/fiber'

export const VoxelWrap = styled.div`
  position: sticky;
  top: calc((100vh / 2) - 300px);
  height: 600px;

  // Mobile CSS
  @media ${({ theme }) => theme.device.mobile} {
    position: relative;
    top: auto;
    left: auto;
    height: 300px;
  }
`

export const Canvas = styled(CanvasFiber)`
  opacity: 0;
  transition: opacity 1s ease;
  &.show-voxel {
    opacity: 1;
  }
`
