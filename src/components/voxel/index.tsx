import { useEffect, useState, useRef, memo, useCallback } from 'react'
import { PerspectiveCamera, PresentationControls, useProgress } from '@react-three/drei'
import { CanvasStyled } from './style'
import VoxelObject from './voxelObject'

const url = '/voxel/juni-coding-voxel.gltf'

const Voxel = ({ load, doneLoad }: { load: boolean; doneLoad: () => void }) => {
  const { progress } = useProgress()
  const [rotate, setRotate] = useState(3.15)
  const intervalId: { current: NodeJS.Timeout | null } = useRef(null)

  const spinRotate = () => {
    intervalId.current = setInterval(() => {
      setRotate((prev: number) => prev + 0.05)
    }, 100)
  }

  // Window Event Hanlder
  const browserEventHandler = useCallback((e: globalThis.FocusEvent) => {
    if (e.type === 'blur') {
      clearInterval(intervalId.current || 0)
      return
    }
    clearInterval(intervalId.current || 0)
    spinRotate()
  }, [])

  useEffect(() => {
    if (progress === 100) {
      doneLoad()
      spinRotate()
    }
  }, [progress])

  useEffect(() => {
    window.addEventListener('blur', browserEventHandler)
    return () => window.removeEventListener('blur', browserEventHandler)
  }, [])

  useEffect(() => {
    window.addEventListener('focus', browserEventHandler)
    return () => window.removeEventListener('focus', browserEventHandler)
  }, [])

  return (
    <CanvasStyled className={load ? 'show-voxel' : ''}>
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
    </CanvasStyled>
  )
}

export default memo(Voxel)
