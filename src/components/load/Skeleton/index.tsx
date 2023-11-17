import { memo, useMemo } from 'react'

interface ISkeleton {
  height: string | number
}

const Skeleton = ({ height }: ISkeleton) => {
  const heightSize = useMemo(() => {
    if (typeof height === 'string' && height.includes('px')) return `h-[${height}]`
    else if (typeof height === 'number') return `h-[${height}px]`
    else {
      console.error('check props height')
      return `h-[${height}]`
    }
  }, [height])
  return <div className={`${heightSize}`} />
}

export default memo(Skeleton)
