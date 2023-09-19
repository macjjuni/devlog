import Image from 'next/image'
import common from '@/styles/common'
import type { INotionInfo } from '@/types/notion'

const defaultStyle = `border rounded-md mb-md ${common.borderColor}`

const Profile = ({ info }: { info: INotionInfo }) => {
  return (
    <div className="mb-lg">
      {info.coverURL && <Image src={info?.coverURL} alt={info?.title} width={300} height={300} className={`${defaultStyle}`} />}

      <h3 className="text-categoryTitle py-sm">
        {info?.icon} {info?.title}
      </h3>
      <p>{info?.description}</p>
    </div>
  )
}

export default Profile
