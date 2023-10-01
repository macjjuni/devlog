import Image from 'next/image'
import date from '@/lib/date'
import { motion } from 'framer-motion'
import { guestbookLeftItemMotion } from '@/utils/framer'
import { defaultTrs } from '@/styles/common'

import type { ReadGuestBookType } from '@/types/notion'

const MessageLeft = ({ item, button }: { item: ReadGuestBookType; button: React.ReactNode }) => {
  return (
    <motion.li variants={guestbookLeftItemMotion} className="flex justify-start select-none">
      <div className="flex justify-start gap-md max-w-[700px] p-sm">
        <Image src={item.image} alt={item.name} width={56} height={56} className="rounded-[50%] w-[56px] h-[56px]" />

        <div className="flex flex-col gap-sm">
          <span className="text-body font-[500]">{item.name}</span>

          <div className="flex gap-sm items-start">
            <div
              className={`flex flex-col gap-xs border border-BLG300 bg-BLG200 dark:bg-BLG800 dark:border-BLG700 py-sm px-md rounded-sm transition-colors ${defaultTrs}`}
            >
              <p>{item.content}</p>

              <p className="flex items-center gap-xs">
                <span className="text-bodySm">{date.formatDetail(item.created)}</span>
                <span>{item.secret && '🔒'}</span>
              </p>
            </div>
            {button}
          </div>
        </div>
      </div>
    </motion.li>
  )
}

export default MessageLeft
