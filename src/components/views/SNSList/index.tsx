import { FiGithub, FiInstagram } from 'react-icons/fi'
import SNSItem from './components/SNSItem'
import TistorySVG from './components/TistorySVG'

const githubURL = process.env.NEXT_PUBLIC_GITHUB || 'https://github.com/macjjuni/'
const tistoryURL = process.env.NEXT_PUBLIC_TISTORY || 'https://juni-official.tistory.com/'
const instaURL = process.env.NEXT_PUBLIC_INSTA || 'https://www.instagram.com/juni.btc/'

const SNSList = () => {
  return (
    <ul className="flex justify-end items-center gap-1">
      <SNSItem href={githubURL} icon={<FiGithub fontSize={26} />} title="Tistory Blog" className="sns-active" />
      <SNSItem href={tistoryURL} icon={<TistorySVG fontSize={26} />} title="Tistory Blog" className="sns-warning" />
      <SNSItem href={instaURL} icon={<FiInstagram fontSize={26} />} title="Instagram" className="sns-active" />
    </ul>
  )
}

export default SNSList
