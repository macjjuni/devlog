import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { PerspectiveCamera, PresentationControls } from '@react-three/drei'

const options = {
  scale: 0.07,
  position: [0, 1, 1],
}

const Voxel = () => {
  const gltf = useLoader(GLTFLoader, '/voxel/juni-coding-voxel.gltf')

  return (
    <Canvas style={{ height: '700px' }}>
      <Suspense fallback={null}>
        <PerspectiveCamera position={[0, -2.6, 0]} far={1000}>
          <directionalLight intensity={0.2} />
          <ambientLight intensity={0.3} />
          <spotLight intensity={0.5} angle={2} penumbra={1} position={[10, 15, 10]} castShadow />
          <PresentationControls
            global
            config={{ mass: 2, tension: 500, friction: 30 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 3.15, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <primitive object={gltf.scene} scale={options.scale} position={options.position} />
          </PresentationControls>
        </PerspectiveCamera>
      </Suspense>
    </Canvas>
  )
}

export default Voxel
