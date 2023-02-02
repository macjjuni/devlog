import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, PresentationControls } from '@react-three/drei'
import VoxelObject from './voxel'
import Spinner from './spinner'

const url = '/voxel/juni-coding-voxel.gltf'

const Voxel = () => {
  const [rotate, setRotate] = useState(3.15)
  const [isLoad, setLoad] = useState(false)
  const onLoad = () => {
    setLoad(true)
  }

  useEffect(() => {
    if (isLoad)
      setInterval(() => {
        setRotate((prev: number) => prev + 0.05)
      }, 100)
  }, [isLoad])

  return (
    <>
      <Canvas style={{ height: '600px' }}>
        <PerspectiveCamera position={[0, -2.6, 0]} far={1000}>
          <directionalLight intensity={0.2} />
          <ambientLight intensity={0.3} />
          <spotLight intensity={0.5} angle={2} penumbra={1} position={[10, 15, 10]} castShadow />
          <PresentationControls
            global
            speed={1}
            config={{ mass: 2, tension: 500, friction: 30 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0.3, rotate, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <VoxelObject url={url} onLoad={onLoad} />
          </PresentationControls>
        </PerspectiveCamera>
      </Canvas>
    </>
  )
}

export default Voxel
