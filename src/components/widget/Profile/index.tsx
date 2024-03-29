// import Image from 'next/image'
// import common from '@/styles/common'
import BtcPayment from '@/components/molecule/BtcPayment'
import type { INotionInfo } from '@/@types/notion'

// const defaultStyle = `rounded-xs mb-md h-[270px] ${common.borderColor} border border-BLG300 object-cover	`

const Profile = ({ info }: { info: INotionInfo }) => {
  return (
    <div className="lg:mb-xl">
      {/* {info.coverURL && <Image src={info?.coverURL} alt={info?.title} width={1200} height={300} className={`${defaultStyle}`} priority />} */}
      {info.coverURL && <BtcPayment icon={info?.icon} name={info?.title} url={info?.coverURL} />}
      {/* <h3 className="text-categoryTitle py-sm mb-sm">
        {info?.icon} {info?.title}
      </h3> */}
      <p className="px-sm py-xs">{info?.description}</p>
    </div>
  )
}

export default Profile
