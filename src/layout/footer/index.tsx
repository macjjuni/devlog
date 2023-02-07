import { memo } from 'react'
import { FooterStyld } from './style'
import SnsIcons from './components/snsIcons'
import Text from '../../components/text'

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
