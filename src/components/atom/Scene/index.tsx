import { useState, useCallback, memo } from 'react'
import Spline from '@splinetool/react-spline'

const sceneUrl = 'https://prod.spline.design/wDppaG99uxF-mPel/scene.splinecode'

const Scene = () => {
  const [isLoad, setLoad] = useState(false)

  const onLoad = useCallback(() => {
    setLoad(true)
  }, [])

  return (
    <>
      {!isLoad && <div className="w-full h-full rounded-xl bg-BLG100 dark:bg-BLG800 skeleton" />}
      <Spline scene={sceneUrl} className="w-full h-full scale-125 lg:scale-100" onLoad={onLoad} />
    </>
  )
}

export default memo(Scene)
