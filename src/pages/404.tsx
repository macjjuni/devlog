import LottieItem from '@/components/atom/LottieItem'
import nofoundLottie from '@/assets/lottie/404.json'
import Link from 'next/link'
import common from '@/styles/common'

// Lottie Option
const defaultOption = {
  loop: true,
  play: true,
  style: { width: '280px', height: '280px' },
}

export default function Custom404() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[48px] font-bold">Not Found</h1>
      <LottieItem animationData={nofoundLottie} defaultOption={defaultOption} />
      <Link href="/blog" replace className={`text-lg px-lg py-sm border rounded-md ${common.borderColor}`}>
        Go Home
      </Link>
    </div>
  )
}
