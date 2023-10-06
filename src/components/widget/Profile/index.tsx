import Image from 'next/image'
import common from '@/styles/common'
import type { INotionInfo } from '@/@types/notion'

const defaultStyle = `border rounded-xs mb-md ${common.borderColor} shadow-profile`

const Profile = ({ info }: { info: INotionInfo }) => {
  return (
    <div className="lg:my-xl">
      {info.coverURL && <Image src={info?.coverURL} alt={info?.title} width={300} height={300} className={`${defaultStyle}`} />}
      <h3 className="text-categoryTitle py-sm mb-sm">
        {info?.icon} {info?.title}
      </h3>
      <p className="px-sm py-xs">{info?.description}</p>
    </div>
  )
}

export default Profile
