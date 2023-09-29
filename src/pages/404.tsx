import useStore from '@/store'
import LottieItem from '@/components/atom/LottieItem'
import nofoundLottie from '@/assets/lottie/404.json'
import Link from 'next/link'
import common from '@/styles/common'
import lottieOption from '@/utils/lottie'
import { useEffect } from 'react'

export default function Custom404() {
  const { setSearch } = useStore((state) => state)

  useEffect(() => {
    setSearch(false)
  }, [])

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[48px] font-bold">Not Found</h1>
      <LottieItem animationData={nofoundLottie} defaultOption={lottieOption[404]} />
      <Link href="/blog" replace className={`text-lg px-lg py-sm border rounded-md ${common.borderColor}`}>
        Go Home
      </Link>
    </div>
  )
}
