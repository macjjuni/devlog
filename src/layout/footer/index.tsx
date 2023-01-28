import { memo } from 'react'
import { FooterStyld } from './style'
import SnsIcons from './components/SnsIcons'
import Text from '../../components/Text'

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
