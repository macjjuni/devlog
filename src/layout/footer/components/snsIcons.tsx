import { FiGithub, FiInstagram } from 'react-icons/fi'
import SNSItem from './SNSItem'
import TistoryIcon from './TistoryIcon'
import * as F from '../Footer.style'

const SNSIcons = () => {
  return (
    <F.SNSList>
      <SNSItem href="https://github.com/macjjuni" title="Github Profile" icon={<FiGithub />} />
      <SNSItem href="https://juni-official.tistory.com" title="Tistory Blog" icon={<TistoryIcon />} />
      <SNSItem href="https://www.instagram.com/juni.btc/" title="Instagram Profile" icon={<FiInstagram />} />
    </F.SNSList>
  )
}

export default SNSIcons
