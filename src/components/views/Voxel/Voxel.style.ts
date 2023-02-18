import styled from 'styled-components'
import { Canvas as CanvasFiber } from '@react-three/fiber'

export const VoxelWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media ${({ theme }) => theme.device.mobile} {
    top: ${({ theme }) => theme.layout.mobile.header};
    height: calc(100% - ${({ theme }) => theme.layout.mobile.header});
  }
`
export const Voxel = styled.div`
  position: sticky;
  top: calc((100vh / 2) - 250px);
  width: 500px;
  height: 500px;

  @media screen and (max-width: 1200px) {
    width: calc(100vw / 2);
  }

  // Mobile CSS
  @media ${({ theme }) => theme.device.mobile} {
    position: relative;
    top: auto;
    left: auto;
    width: 100%;
    height: 300px;
  }
`
export const Canvas = styled(CanvasFiber)`
  opacity: 0;
  transition: opacity 0.2s ease;
  &.show-voxel {
    opacity: 1;
  }
`
