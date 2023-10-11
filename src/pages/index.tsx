import NextHead from '@/components/seo/DefaultMeta'
import HomeLayout from '@/layouts/PageLayout/HomeLayout'
// import Spline from '@splinetool/react-spline'

// const url = 'https://prod.spline.design/rriMA8DWkPMhaNEn/scene.splinecode'
// {/* <Spline scene={url} /> */}
export default function Home() {
  return (
    <HomeLayout>
      <NextHead />
      준비중...
      {/* <div className="w-[500px] h-[800px]">{<Spline scene="https://prod.spline.design/s3ZFesZFBZTU80TF/scene.splinecode" />}</div> */}
    </HomeLayout>
  )
}
