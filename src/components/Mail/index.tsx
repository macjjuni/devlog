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
  const copyMail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText('macjjuni@gmail.com')
      console.log('Email copied!')
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }, [])

  return (
    <MailWrap>
      <MailContainer onClick={copyMail}>
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
