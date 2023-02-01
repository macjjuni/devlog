import { FiGithub, FiInstagram } from 'react-icons/fi'
import TistorySVG from './tistorySVG'
import { UlStyled } from '../style'
import LinkWrap from './linkWrap'

const SnsIcons = () => {
  return (
    <UlStyled>
      <li>
        <LinkWrap href="https://github.com/macjjuni" title="Github Profile" icon={<FiGithub />} />
      </li>
      <li>
        <LinkWrap href="https://juni-official.tistory.com" title="Tistory Blog" icon={<TistorySVG />} />
      </li>
      <li>
        <LinkWrap href="https://www.instagram.com/juni.btc/" title="Instagram Profile" icon={<FiInstagram />} />
      </li>
    </UlStyled>
  )
}

export default SnsIcons
