import { useState } from 'react'
import Lotties from 'components/common/Lotties'
import errorLottie from 'assets/lottie/mail-lottie.json'
import { textCopy } from 'utils/copy'
import * as M from './Mail.style'
import Tooltip from '../Tooltip'

const email = process.env.NEXT_PUBLIC_EMAIL || 'not found email 404'

// Lottie Option
const defaultOption = {
  loop: true,
  play: true,
  style: { width: '50px', height: '50px' },
}

const Mail = () => {
  const [isMail, setMail] = useState<boolean>(false)
  const clickCopy = async () => {
    const isSuccess = await textCopy(email)
    if (isSuccess && !isMail) setMail(true)
  }

  return (
    <M.Mail>
      <M.MailWrap onClick={clickCopy} onTouchStart={clickCopy}>
        <M.LottieCustom>
          <Lotties defaultOption={defaultOption} animationData={errorLottie} />
        </M.LottieCustom>
        <M.Spacer />
        <M.MailText className="mail-text">macjjuni@gmail.com</M.MailText>
        <Tooltip value={isMail} setValue={setMail} />
      </M.MailWrap>
    </M.Mail>
  )
}

export default Mail
