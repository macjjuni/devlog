import Lottie, { LottieProps } from 'react-lottie-player'
import { ErrorLayout } from '../styles/404'
import lottieJson from '../src/assets/lottie/error-page-not-found.json'

// Lottie Option
const defaultOptions: LottieProps = {
  loop: true,
  play: true,
  style: {
    width: '200px',
    height: '200px',
    margin: '0',
  },
}

const Error = () => {
  return (
    <ErrorLayout>
      <Lottie {...defaultOptions} animationData={lottieJson} speed={1} />
    </ErrorLayout>
  )
}

export default Error
