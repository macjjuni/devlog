import DailySvg from '@/components/molecule/CategorySvg/components/DailySvg'
import ReactSvg from '@/components/molecule/CategorySvg/components/ReactSvg'
import VueSvg from '@/components/molecule/CategorySvg/components/VueSvg'
import BtcSvg from '@/components/molecule/CategorySvg/components/BtcSvg'
import DevSvg from '@/components/molecule/CategorySvg/components/DevSvg'
import JavaScript from '@/components/molecule/CategorySvg/components/JavaScript'
import config from '@/config/notion.config'
import TsSvg from './components/TsSvg'
import CsSvg from './components/CsSvg'
import GitSvg from './components/GitSvg'
import PgrSvg from './components/PgrSvg'
import NotionSvg from './components/NotionSvg'

interface ICatSvg {
  key: string
  Component: (color: string) => React.ReactNode
}

const { categoryColor } = config
const defaultColor = categoryColor.find((cate) => cate.key === 'default')! // 색 없을 때 기본 색으로 사용

const categories: ICatSvg[] = [
  { key: 'dev', Component: (color) => <DevSvg width={34} height={34} color={color} /> },
  { key: 'javascript', Component: (color) => <JavaScript width={28} height={28} color={color} /> },
  { key: 'typescript', Component: (color) => <TsSvg width={28} height={28} color={color} /> },
  { key: 'react', Component: (color) => <ReactSvg width={28} height={28} color={color} /> },
  { key: 'vue', Component: (color) => <VueSvg width={28} height={28} color={color} /> },
  { key: 'bitcoin', Component: (color) => <BtcSvg width={28} height={28} color={color} /> },
  { key: 'git', Component: (color) => <GitSvg width={28} height={28} color={color} /> },
  { key: 'cs', Component: (color) => <CsSvg width={28} height={28} color={color} /> },
  { key: '프로그래머스', Component: (color) => <PgrSvg width={28} height={28} color={color} /> },
  { key: '일상', Component: (color) => <DailySvg width={28} height={28} color={color} /> },
]

const CategorySvg = ({ category }: { category?: string }) => {
  const Svg = categories.find((cat) => cat.key === category?.toLowerCase())
  const categoryTheme = categoryColor.find((cat) => cat.key === category?.toLowerCase()) || defaultColor

  if (Svg) return Svg.Component(categoryTheme.color)
  return <NotionSvg width={32} height={32} />
}

export default CategorySvg
