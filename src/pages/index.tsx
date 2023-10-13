import NextHead from '@/components/seo/DefaultMeta'
import HomeLayout from '@/layouts/PageLayout/HomeLayout'
// import Spline from '@splinetool/react-spline'

// const url = 'https://prod.spline.design/rriMA8DWkPMhaNEn/scene.splinecode'
// {/* <Spline scene={url} /> */}
export default function Home() {
  return (
    <HomeLayout>
      <NextHead />
      <a href="https://spline.design/" target="_blank" className="underline font-bold">
        Spline
      </a>{' '}
      공부중...
      {/* <div className="w-[500px] h-[800px]">{<Spline scene="https://prod.spline.design/s3ZFesZFBZTU80TF/scene.splinecode" />}</div> */}
    </HomeLayout>
  )
}
