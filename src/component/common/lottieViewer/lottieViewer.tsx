import Lottie, { type LottieProps } from "react-lottie-player";

export interface ILottieItem {
  defaultOption: LottieProps;
  animationData: object;
  className?: string;
}

export default function LottieViewer({ defaultOption, animationData, className = "" }: ILottieItem) {
  return <Lottie {...defaultOption} animationData={animationData} className={className} />;
}
