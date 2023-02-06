import { MailWrap, MailContainer, LottieCustom, Spacer, MailText } from './style'
import Lotties from '../Lotties'
import errorLottie from '../../assets/lottie/mail-lottie.json'

const email = process.env.NEXT_PUBLIC_EMAIL || 'not found email 404'

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
  const emailCopy = async () => {
    try {
      if ('clipboard' in navigator) {
        await navigator.clipboard.writeText(email)
      } else {
        document.execCommand('copy', true, email)
      }
    } catch (e) {
      console.error('Copy failed', e)
    }
  }

  return (
    <MailWrap>
      <MailContainer onClick={emailCopy}>
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
