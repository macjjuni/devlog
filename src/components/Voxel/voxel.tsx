import { useEffect } from 'react'
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

const options = {
  scale: 0.06,
  position: [0, 1, 1],
}

const scene = new THREE.Scene()
const gltfLoader = new GLTFLoader()

const VoxelObject = ({ url, onLoad }: { url: string; onLoad: () => void }) => {
  useEffect(() => {
    gltfLoader.load(
      url,
      (gltf: GLTF) => {
        console.log('success')
        const mixer = new THREE.AnimationMixer(gltf.scene)
        gltf.animations.forEach((clip) => mixer.clipAction(clip).play())
        gltf.animations.forEach((clip: THREE.AnimationClip) => {
          mixer.clipAction(clip).play()
        })
        scene.add(gltf.scene)
        onLoad()
      },
      (progress) => {
        console.log('progress')
        console.log(progress)
      },
      (error) => {
        console.log('error')
        console.log(error)
      }
    )
  }, [])

  return <primitive object={scene} scale={options.scale} position={options.position} />
}
export default VoxelObject
