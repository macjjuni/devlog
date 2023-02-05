import { useEffect, useState, Suspense, memo } from 'react'
import { PerspectiveCamera, PresentationControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import VoxelObject from './voxelObject'
import Loader from './Loader'

const url = '/voxel/juni-coding-voxel.gltf'

const Voxel = () => {
  const [rotate, setRotate] = useState(3.15)

  useEffect(() => {
    setInterval(() => {
      setRotate((prev: number) => prev + 0.05)
    }, 100)
  }, [])

  return (
    <Canvas>
      <Suspense fallback={<Loader />}>
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
            <VoxelObject url={url} />
          </PresentationControls>
        </PerspectiveCamera>
      </Suspense>
    </Canvas>
  )
}

export default memo(Voxel)
