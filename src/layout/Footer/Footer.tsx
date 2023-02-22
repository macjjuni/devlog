import { memo } from 'react'
import * as F from './Footer.style'

const Footer = () => {
  return <F.Footer>© {new Date().getFullYear()} kkusaeng.</F.Footer>
}

export default memo(Footer)
