interface IHomeLayout {
  left: React.ReactNode
  right: React.ReactNode
}

const innerStyle = 'w-1/2 p-sm'

export default function HomeLayout({ left, right }: IHomeLayout) {
  return (
    <div className="flex justify-between items-center w-full max-w-layout p-md">
      <div className={innerStyle}>{left}</div>
      <div className={innerStyle}>{right}</div>
    </div>
  )
}
