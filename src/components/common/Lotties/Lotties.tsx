import { FC } from 'react'
import Lottie, { type LottieProps } from 'react-lottie-player'

export interface ILotties {
  defaultOption: LottieProps
  animationData: object
}

const Lotties: FC<ILotties> = ({ defaultOption, animationData }) => {
  return <Lottie {...defaultOption} animationData={animationData} />
}
export default Lotties
