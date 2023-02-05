import styled from 'styled-components'
import Lotties from '../src/components/Lotties'
import errorLottie from '../src/assets/lottie/error-page-not-found.json'

const ErrorLayout = styled.section`
  height: 100%;
`
// Lottie Option
const defaultOption = {
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
      <Lotties defaultOption={defaultOption} animationData={errorLottie} />
    </ErrorLayout>
  )
}

export default Error
