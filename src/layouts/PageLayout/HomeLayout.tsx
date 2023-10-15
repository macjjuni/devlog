interface IHomeLayout {
  left: React.ReactNode
  right: React.ReactNode
}

const innerStyle = 'w-full md:w-1/2 p-sm'

export default function HomeLayout({ left, right }: IHomeLayout) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-layout p-md">
      <div className={innerStyle}>{left}</div>
      <div className={innerStyle}>{right}</div>
    </div>
  )
}
