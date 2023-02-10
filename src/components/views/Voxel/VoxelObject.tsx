import { useEffect, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const options = {
  scale: 0.055,
  position: [0, 1.5, 1],
}

const VoxelObject = ({ url }: { url: string }) => {
  const { scene, animations } = useLoader(GLTFLoader, url)
  const [mixer] = useState<THREE.AnimationMixer>(() => new THREE.AnimationMixer(scene))

  useFrame((state, delta) => mixer.update(delta))
  useEffect(() => {
    mixer.clipAction(animations[0]).play()
    return () => animations.forEach((clip) => mixer.uncacheClip(clip))
  }, [])

  return <primitive object={scene} scale={options.scale} position={options.position} />
}

export default VoxelObject
