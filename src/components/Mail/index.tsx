import { MailWrap, MailContainer, LottieCustom, Spacer, MailText } from './style'
import Lotties from '../Lotties'
import errorLottie from '../../assets/lottie/mail-lottie.json'
import { textCopy } from '../../utils/copy'

const email = process.env.NEXT_PUBLIC_EMAIL || 'not found email 404'

// Lottie Option
const defaultOption = {
  loop: true,
  play: true,
  style: { width: '50px', height: '50px' },
}

const Mail = () => {
  const clickCopy = async () => {
    await textCopy(email)
  }

  return (
    <MailWrap>
      <MailContainer onClick={clickCopy}>
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
