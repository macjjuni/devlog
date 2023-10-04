import { useEffect } from 'react'
import LottieItem from '@/components/atom/LottieItem'
import BtcLocket from '@/assets/lottie/bitcoin_rocket.json'
import initBinance, { closeBinance } from '@/api/bitcoin'
import useStore from '@/store'

// Lottie Option
const defaultOption = {
  loop: true,
  play: true,
  style: { width: '260px', height: '260px' },
}

const MarketPrice = () => {
  const { btc } = useStore((state) => state)
  useEffect(() => {
    initBinance()
    return () => {
      closeBinance()
    }
  }, [])

  return (
    <div className="relative lg:my-xl p-md">
      <span className="absolute top-[56px] left-[28px] z-[9999] rotate-[-42deg] text-postTitle market-price">
        <span className="mr-xs">$</span>
        {btc}
      </span>
      <LottieItem animationData={BtcLocket} defaultOption={defaultOption} />
    </div>
  )
}

export default MarketPrice
