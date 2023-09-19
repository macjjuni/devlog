import Lottie, { type LottieProps } from 'react-lottie-player'

export interface ILottieItem {
  defaultOption: LottieProps
  animationData: object
  className?: string
}

const LottieItem = ({ defaultOption, animationData, className = '' }: ILottieItem) => {
  return <Lottie {...defaultOption} animationData={animationData} className={className} />
}
export default LottieItem
