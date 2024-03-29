import LoadSearch from '@/components/load/LoadSearch'
import useStore from '@/store'

const Load = () => {
  const { search } = useStore((state) => state)

  if (search)
    return (
      <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-[rgba(0,0,0,0.5)] z-[9999]">
        <LoadSearch isShow={search} />
      </div>
    )
  return null
}

export default Load
