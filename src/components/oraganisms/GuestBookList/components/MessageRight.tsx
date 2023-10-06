import Image from 'next/image'
import date from '@/lib/date'
import { motion } from 'framer-motion'
import { guestbookRightItemMotion } from '@/utils/framer'
import common from '@/styles/common'

import type { ReadGuestBookType } from '@/@types/notion'

const MessageRight = ({ item, button }: { item: ReadGuestBookType; button: React.ReactNode }) => {
  return (
    <motion.li variants={guestbookRightItemMotion} className="flex justify-end select-none">
      <div className="flex justify-start gap-md max-w-[700px] p-sm">
        <div className="flex flex-col gap-sm">
          <span className="text-body text-right font-[600]">{item.name}</span>

          <div className="flex gap-sm items-start">
            {button}
            <div
              className={`flex flex-col gap-xs border border-BLG300 bg-BLG200 dark:bg-BLG800 dark:border-BLG700 py-sm px-md rounded-sm transition-colors ${common.textColor}`}
            >
              <p>{item.content}</p>

              <p className="flex justify-end items-center gap-xs">
                <span>{item.secret && '🔒'}</span>
                <span className="text-bodySm">{date.formatDetail(item.created)}</span>
              </p>
            </div>
          </div>
        </div>
        <Image src={item.image} alt={item.name} width={56} height={56} className="rounded-[50%] w-[56px] h-[56px]" />
      </div>
    </motion.li>
  )
}

export default MessageRight
