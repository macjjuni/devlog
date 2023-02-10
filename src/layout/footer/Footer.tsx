import { memo } from 'react'
import Text from 'components/common/Text'
import * as F from './Footer.style'
import SNSIcons from './components/SNSIcons'

const Footer = () => {
  return (
    <F.Footer>
      <Text type="p" variant="body">
        © {new Date().getFullYear()} kkusaeng.
      </Text>
      <SNSIcons />
    </F.Footer>
  )
}

export default memo(Footer)
