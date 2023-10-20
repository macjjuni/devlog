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
  Component: (color: string, size?: number) => React.ReactNode
}

const { categoryColor } = config
const defaultColor = categoryColor.find((cate) => cate.key === 'default')! // 색 없을 때 기본 색으로 사용

const categories: ICatSvg[] = [
  { key: 'dev', Component: (color, size = 34) => <DevSvg width={size} height={size} color={color} /> },
  { key: 'daily', Component: (color, size = 28) => <DailySvg width={size} height={size} color={color} /> },
  { key: 'javascript', Component: (color, size = 28) => <JavaScript width={size} height={size} color={color} /> },
  { key: 'typescript', Component: (color, size = 28) => <TsSvg width={size} height={size} color={color} /> },
  { key: 'react', Component: (color, size = 28) => <ReactSvg width={size} height={size} color={color} /> },
  { key: 'vue', Component: (color, size = 28) => <VueSvg width={size} height={size} color={color} /> },
  { key: 'bitcoin', Component: (color, size = 28) => <BtcSvg width={size} height={size} color={color} /> },
  { key: 'git', Component: (color, size = 28) => <GitSvg width={size} height={size} color={color} /> },
  { key: 'cs', Component: (color, size = 28) => <CsSvg width={size} height={size} color={color} /> },
  { key: 'programmers', Component: (color, size = 28) => <PgrSvg width={size} height={size} color={color} /> },
]

export default function CategorySvg({ category, size }: { category?: string; size?: number }) {
  const Svg = categories.find((cat) => cat.key === category?.toLowerCase())
  const categoryTheme = categoryColor.find((cat) => cat.key === category?.toLowerCase()) || defaultColor
  if (Svg) return Svg.Component(categoryTheme.color, size)
  return <NotionSvg width={size || 120} height={size || 120} />
}
