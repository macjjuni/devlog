import { FiGithub, FiInstagram } from 'react-icons/fi'
import LinkWrap from './LinkWrap'
import TistorySVG from './TistorySVG'
import { UlStyled } from '../Footer.style'

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
