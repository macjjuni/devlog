interface ISkeletonBox {
  width: string
  height: string
}

export default function SkeletonBox({ width = '100%', height = '100%' }: ISkeletonBox) {
  const getStyle = () => `${width === '100%' ? 'w-full' : `w-[${width}]`} ${height === '100%' ? 'h-full' : `h-[${width}]`}`
  return <div className={`${getStyle()} bg-BLG200 dark:bg-BLG800 rounded-sm skeleton`} />
}
