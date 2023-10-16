import dynamic from 'next/dynamic'
import NextHead from '@/components/seo/DefaultMeta'
import HomeLayout from '@/layouts/PageLayout/HomeLayout'
import SocialLink from '@/components/widget/SocialLink'

const Scene = dynamic(() => import('@/components/atom/Scene'), { ssr: false })

const textStyle = 'text-[18px] lg:text-[24px] pb-xxl lg:pb-xxxl'

export default function Home() {
  return (
    <>
      <NextHead />
      <HomeLayout
        left={<Scene />}
        right={
          <>
            <h1 className="text-[32px] font-bold pb-xxxl">About</h1>
            <p className="text-[18px] lg:text-[24px]">안녕하세요? 👋</p>
            <p className={textStyle}>프론트엔드 개발자 &#39;꾸생&#39;입니다.</p>
            <p className={textStyle}>&#39;꾸준함이 생명&#39;이라는 인생 모토를 가지고 있으며 개발 공부나 취미 등 기록하기 위해 노력하고 있습니다.</p>
            <p className={textStyle}>세심한 성격으로 사소한 디테일에 신경을 쓰며 프로젝트 완성도를 높이는 데 열정적입니다.</p>
            <div className="flex justify-end items-center mt-xxxl">
              <SocialLink />
            </div>
          </>
        }
      />
    </>
  )
}
