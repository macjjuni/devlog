import TwiiterSvg from '@/components/svg/TwiiterSvg'
import GithubSvg from '@/components/svg/GithubSvg'

const twitterUrl = process.env.NEXT_PUBLIC_TWITTER || '#'
const githubUrl = process.env.NEXT_PUBLIC_GITHUB || '#'

const SocialLink = () => {
  if (twitterUrl.includes('#')) console.error('Not Found Twitter Url')
  if (githubUrl.includes('#')) console.error('Not Found Github Url')

  return (
    <div className="relative flex flex-row justify-start items-center gap-md dark:text-white mt-xl md:my-xl px-xs">
      <a
        href={twitterUrl}
        target="_blank"
        title="트위터 링크 새탭으로 열기"
        className="relative flex justify-start gap-xs items-center text-body font-normal hoverUnderline"
      >
        <TwiiterSvg size={28} /> Twitter(x)
      </a>
      <a
        href={githubUrl}
        target="_blank"
        title="깃허브 링크 새탭으로 열기"
        className="relative flex justify-start gap-xs items-center text-body font-normal hoverUnderline"
      >
        <GithubSvg size={28} /> Github
      </a>
    </div>
  )
}

export default SocialLink
