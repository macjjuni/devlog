import { useEffect, useState, useRef, memo, useCallback } from 'react'
import { PerspectiveCamera, PresentationControls, useProgress } from '@react-three/drei'
import { useRouter } from 'next/router'
import Spinner from 'components/views/Spinner'
import VoxelObject from './components/VoxelObject'
import * as V from './Voxel.style'

// 트래픽을 줄이겠다는 강한 의지!
const url = process.env.NEXT_PUBLIC_VOXEL_URL || '/voxel/juni-coding-voxel.gltf'

// 해당 주소에서만 Voxel 보이기
const accessRoutes = ['/']

const Voxel = ({ load, doneLoad }: { load: boolean; doneLoad: () => void }) => {
  const { route } = useRouter()
  const [isTransparent, setTransparent] = useState<boolean>(false)
  const { progress } = useProgress()
  const [rotate, setRotate] = useState(3.15)
  const intervalId: { current: NodeJS.Timeout | null } = useRef(null)

  // Voxel 회전
  const spinRotate = () => {
    if (intervalId.current === null && accessRoutes.includes(route)) {
      intervalId.current = setInterval(() => {
        setRotate((prev: number) => prev + 0.03)
      }, 100)
    }
  }
  // Voxel 회전 중지
  const stopSpin = useCallback(() => {
    clearInterval(intervalId.current || 0)
    intervalId.current = null
  }, [])

  // Window Event Hanlder
  const browserEventHandler = useCallback((e: globalThis.FocusEvent) => {
    if (e.type === 'blur') {
      stopSpin()
      return
    }
    spinRotate()
  }, [])

  // 브라우저 focus/blur 이벤트 효과 적용
  useEffect(() => {
    window.addEventListener('blur', browserEventHandler)
    window.addEventListener('focus', browserEventHandler)
    return () => {
      window.removeEventListener('blur', browserEventHandler)
      window.removeEventListener('focus', browserEventHandler)
    }
  }, [])

  useEffect(() => {
    if (accessRoutes.includes(route)) {
      spinRotate()
      setTransparent(false)
      return
    }
    stopSpin()
    setTransparent(true)
  }, [route])

  // progress 100% 일 경우 스피너 제거 및 자동회전
  useEffect(() => {
    if (progress === 100) {
      doneLoad()
      const isFocus = document.hasFocus()
      if (isFocus) spinRotate()
    }
  }, [progress])

  return (
    <V.VoxelWrap>
      <V.Voxel className={!isTransparent ? 'zIdx-1' : ''}>
        {!load && <Spinner />}
        <V.Canvas className={`${load ? 'show-voxel' : ''} ${isTransparent ? 'transparent' : ''}`}>
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
        </V.Canvas>
      </V.Voxel>
    </V.VoxelWrap>
  )
}

export default memo(Voxel)
