import { memo } from 'react'
import Text from 'components/common/Text'
import { FooterStyld } from './Footer.style'
import SnsIcons from './components/SnsIcons'

const Footer = () => {
  return (
    <FooterStyld>
      <Text type="p" variant="body">
        © {new Date().getFullYear()} kkusaeng.
      </Text>
      <SnsIcons />
    </FooterStyld>
  )
}

export default memo(Footer)
