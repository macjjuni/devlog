import Image from 'next/image'
import { useSession } from 'next-auth/react'

const wrapStyle = 'inline-flex gap-sm p-md rounded-sm shadow-modal'

const ProfileTooltip = () => {
  const { data: session } = useSession()

  if (session)
    return (
      <div className={wrapStyle}>
        <Image src={session?.user?.image || ''} alt={session?.user?.name || ''} width={64} height={64} className="rounded-[50%]" />
        <div className="flex flex-col justify-start items-start gap-sm p-xs rounded-sm">
          <span className="text-body font-[600]">{session?.user?.name}</span>
          <span className="text-body">This is Guestbook Message!</span>
        </div>
      </div>
    )
}

export default ProfileTooltip
