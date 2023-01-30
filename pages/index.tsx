import type { NextPage } from 'next'
import styled from 'styled-components'
import dynamic from 'next/dynamic'

const Voxel = dynamic(() => import('../src/components/Voxel'), {
  ssr: false,
})

const LayoutStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`

const Home: NextPage = () => {
  return (
    <LayoutStyled>
      <Voxel />
    </LayoutStyled>
  )
}

export default Home
