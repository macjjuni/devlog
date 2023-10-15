import NextHead from '@/components/seo/DefaultMeta'
import HomeLayout from '@/layouts/PageLayout/HomeLayout'
import SocialLink from '@/components/widget/SocialLink'

// import Spline from '@splinetool/react-spline'

// const url = 'https://prod.spline.design/rriMA8DWkPMhaNEn/scene.splinecode'
// {/* <Spline scene={url} /> */}

const textStyle = 'text-[24px]'

export default function Home() {
  return (
    <>
      <NextHead />
      <HomeLayout
        left={
          <>
            <a href="https://spline.design/" target="_blank" className="underline font-bold">
              Spline
            </a>{' '}
            으로 준비중..
          </>
        }
        right={
          <>
            <h1 className="text-[32px] font-bold pb-xxxl">About</h1>
            <p className={textStyle}>안녕하세요? 👋</p>
            <p className={`${textStyle} pb-xxxl`}>프론트엔드 개발자 꾸생입니다.</p>
            <p className={`${textStyle} pb-xxxl`}>
              &#39;꾸준함이 생명&#39;이라는 인생 모토를 가지고 있으며 개발 공부나 취미 등 기록하기 위해 노력하고 있습니다.
            </p>
            <p className={`${textStyle} pb-xxxl`}>세심한 성격으로 사소한 디테일에 신경을 쓰며 프로젝트 완성도를 높이는 데 열정적입니다.</p>
            <p className="flex justify-end items-center">
              <SocialLink />
            </p>
          </>
        }
      />
    </>
  )
}
