import Image from 'next/image'
import common from '@/styles/common'
import type { INotionInfo } from '@/@types/notion'

const defaultStyle = `border rounded-xs mb-md h-[270px] ${common.borderColor} shadow-profile`

const Profile = ({ info }: { info: INotionInfo }) => {
  return (
    <div className="lg:my-xl">
      {info.coverURL && (
        <Image src={info?.coverURL} alt={info?.title} width={1200} height={300} style={{ objectFit: 'cover' }} className={`${defaultStyle}`} priority />
      )}
      <h3 className="text-categoryTitle py-sm mb-sm">
        {info?.icon} {info?.title}
      </h3>
      <p className="px-sm py-xs">{info?.description}</p>
    </div>
  )
}

export default Profile
