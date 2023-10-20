import { useEffect, useCallback } from 'react'
import CountUp from 'react-countup'
import LottieItem from '@/components/atom/LottieItem'
import btcLottie from '@/assets/lottie/btcLottie.json'
import initBinance, { closeBinance } from '@/api/bitcoin'
import useStore from '@/store'

// Lottie Option
const defaultOption = {
  loop: true,
  play: true,
  style: { width: '33px', height: 'auto' },
}

const MarketPrice = () => {
  const { btc } = useStore((state) => state)
  useEffect(() => {
    initBinance()
    return () => {
      closeBinance()
    }
  }, [])

  // 카운트다운 애니메이션 최소값
  const convertToZero = useCallback((num: number) => {
    const firstDigit = Math.floor(num / 10 ** Math.floor(Math.log10(num)))
    const convertedNumber = firstDigit * 10 ** Math.floor(Math.log10(num))
    return convertedNumber
  }, [])

  return (
    <a
      href="https://btc-price.web.app/"
      target="_blank"
      title="BTC-Price 새 탭에서 링크 열기"
      className="relative flex justify-start items-center gap-xs lg:my-xl rounded-xs"
    >
      <LottieItem animationData={btcLottie} defaultOption={defaultOption} />
      <span className="market-price">
        <span className="mr-xs">$</span>
        {!Number.isNaN(Number(btc)) ? <CountUp start={convertToZero(Number(btc))} end={Number(btc)} duration={1} /> : 'btc is NaN!'}
      </span>
    </a>
  )
}

export default MarketPrice
