import { FC } from 'react'
import Lottie from 'react-lottie-player'
import { type ILotties } from './type'

const Lotties: FC<ILotties> = ({ defaultOption, animationData }) => {
  return <Lottie {...defaultOption} animationData={animationData} />
}
export default Lotties
