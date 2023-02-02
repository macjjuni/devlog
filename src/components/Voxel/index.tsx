import { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const Voxel = () => {
  return (
    <Canvas style={{ height: '500px' }}>
      <OrbitControls />
      <mesh>
        <ambientLight intensity={0.5} />
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color={0xa3b18a} />
      </mesh>
    </Canvas>
  )
}

export default Voxel
