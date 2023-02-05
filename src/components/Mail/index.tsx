import { useCallback } from 'react'
import { MailWrap, MailContainer, LottieCustom, Spacer, MailText } from './style'
import Lotties from '../Lotties'
import errorLottie from '../../assets/lottie/mail-lottie.json'

// Lottie Option
const defaultOption = {
  loop: true,
  play: true,
  style: {
    width: '50px',
    height: '50px',
  },
}

const Mail = () => {
  const copyHandle = useCallback(() => {
    console.log('Copied!')
  }, [])

  return (
    <MailWrap onClick={copyHandle}>
      <MailContainer>
        <LottieCustom>
          <Lotties defaultOption={defaultOption} animationData={errorLottie} />
        </LottieCustom>
        <Spacer />
        <MailText className="mail-text">macjjuni@gmail.com</MailText>
      </MailContainer>
    </MailWrap>
  )
}

export default Mail
