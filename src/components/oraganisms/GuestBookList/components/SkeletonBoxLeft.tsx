const SkeletonBoxLeft = () => {
  return (
    <li className="flex justify-start skeleton">
      <div className="flex justify-start gap-md max-w-[700px] p-sm">
        <div className="rounded-[50%] w-[56px] h-[56px] bg-BLG200" />

        <div className="flex flex-col gap-sm">
          <span className="text-body font-[600] w-[120px] h-[30px] rounded-sm bg-BLG200" />

          <div className="flex gap-sm items-start w-[300px] h-[80px] bg-BLG200 rounded-sm" />
        </div>
      </div>
    </li>
  )
}

export default SkeletonBoxLeft
