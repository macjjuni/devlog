const SkeletonBoxRight = () => {
  return (
    <li className="flex justify-end skeleton">
      <div className="flex justify-start gap-md max-w-[700px] p-sm">
        <div className="flex flex-col items-end gap-sm">
          <span className="text-body text-right font-[600] w-[120px] h-[30px] rounded-sm bg-BLG200" />

          <div className="flex gap-sm items-start w-[300px] h-[80px] bg-BLG200 rounded-sm" />
        </div>
        <div className="rounded-[50%] w-[56px] h-[56px] bg-BLG200" />
      </div>
    </li>
  )
}

export default SkeletonBoxRight
