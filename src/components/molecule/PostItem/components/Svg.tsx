import DailySvg from '@/components/svg/DailySvg'
import ReactSvg from '@/components/svg/ReactSvg'
import VueSvg from '@/components/svg/VueSvg'
import BtcSvg from '@/components/svg/BtcSvg'

interface IBackSvg {
  text: string
}

interface ICategorySvg {
  title: string
  component: React.ReactNode
}

const commonClass = 'absolute bottom-0 right-0 m-0 opacity-[0.15] z-0'

const categorySvg: ICategorySvg[] = [
  {
    title: 'daily',
    component: <DailySvg className={`w-[150px] h-[150px] m-0 ${commonClass} bottom-[16px] right-[16px]`} />,
  },
  {
    title: 'react',
    component: <ReactSvg className={`w-[150px] h-[150px] m-0 ${commonClass} bottom-[16px] right-[16px]`} />,
  },
  {
    title: 'vue',
    component: <VueSvg className={`w-[150px] h-[150px] m-0 ${commonClass} bottom-[16px] right-[16px]`} />,
  },
  {
    title: 'bitcoin',
    component: <BtcSvg className={`w-[160px] h-[160px] m-0 ${commonClass} bottom-[16px] right-[16px]`} />,
  },
]

const BackSvg = ({ text }: IBackSvg) => {
  const target = categorySvg.find((cateSvg) => text.toLowerCase().includes(cateSvg.title))
  if (target) return target.component
  return <>...</>
}
export default BackSvg
