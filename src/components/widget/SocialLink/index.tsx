import { motion } from 'framer-motion'
import TwiiterSvg from '@/components/svg/TwiiterSvg'
import GithubSvg from '@/components/svg/GithubSvg'

const twitterUrl = process.env.NEXT_PUBLIC_TWITTER || '#'
const githubUrl = process.env.NEXT_PUBLIC_GITHUB || '#'

const motions = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.14 },
  drag: true,
  dragConstraints: {
    top: -25,
    left: -50,
    right: 50,
    bottom: 25,
  },
}

const SocialLink = () => {
  if (twitterUrl.includes('#')) console.error('Not Found Twitter Url')
  if (githubUrl.includes('#')) console.error('Not Found Github Url')

  return (
    <div className="relative flex gap-md dark:text-white mt-xl md:my-xl">
      <motion.a href={twitterUrl} target="_blank" title="트위터 링크 새탭으로 열기" {...motions} className="relative">
        <TwiiterSvg size={44} />
        <div className="shadow absolute top-[-6px] right-[-6px] flex justify-center items-center w-[22px] h-[22px] text-body text-white bg-red rounded-full">
          2
        </div>
      </motion.a>
      <motion.a href={githubUrl} target="_blank" title="깃허브 링크 새탭으로 열기" {...motions} className="relative">
        <GithubSvg size={44} />
        <div className="shadow absolute top-[-6px] right-[-6px] flex justify-center items-center w-[22px] h-[22px] text-body text-white bg-red rounded-full">
          1
        </div>
      </motion.a>
    </div>
  )
}

export default SocialLink
