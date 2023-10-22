import { useState, useCallback, memo } from 'react'
import Spline from '@splinetool/react-spline'
import SkeletonBox from '../SkeletonBox'

const sceneUrl = 'https://prod.spline.design/wDppaG99uxF-mPel/scene.splinecode'

const Scene = () => {
  const [isLoad, setLoad] = useState(false)

  const onLoad = useCallback(() => {
    setLoad(true)
  }, [])

  return (
    <>
      {!isLoad && <SkeletonBox width="100%" height="100%" />}
      <Spline scene={sceneUrl} className="w-full h-full scale-125 lg:scale-100" onLoad={onLoad} />
    </>
  )
}

export default memo(Scene)
