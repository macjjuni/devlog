interface IHomeLayout {
  left: React.ReactNode
  right: React.ReactNode
}

const innerStyle = 'w-full lg:w-1/2 lg:p-sm'

export default function HomeLayout({ left, right }: IHomeLayout) {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-center w-full max-w-layout p-md">
        <div className={`${innerStyle} h-[300px] lg:h-2/3 lg:pr-xxxxl`}>{left}</div>
        <div className={innerStyle}>{right}</div>
      </div>
    </>
  )
}
