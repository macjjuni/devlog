import { memo } from 'react'
import * as F from './Footer.style'
import SNSIcons from './components/SNSIcons/SNSIcons'

const Footer = () => {
  return (
    <F.Footer>
      © {new Date().getFullYear()} kkusaeng.
      <SNSIcons />
    </F.Footer>
  )
}

export default memo(Footer)
