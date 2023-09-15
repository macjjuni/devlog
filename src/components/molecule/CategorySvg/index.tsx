import DailySvg from '@/components/molecule/CategorySvg/components/DailySvg'
import ReactSvg from '@/components/molecule/CategorySvg/components/ReactSvg'
import VueSvg from '@/components/molecule/CategorySvg/components/VueSvg'
import BtcSvg from '@/components/molecule/CategorySvg/components/BtcSvg'
import DevSvg from '@/components/molecule/CategorySvg/components/DevSvg'
import JavaScript from '@/components/molecule/CategorySvg/components/JavaScript'
import theme, { palette } from '@/styles/theme'
import CsSvg from './components/CsSvg'
import GitSvg from './components/GitSvg'
import DefaultSvg from './components/DefaultSvg'

interface ICatSvg {
  key: string
  Component: (color: string) => React.ReactNode
}

const categories: ICatSvg[] = [
  { key: 'dev', Component: (color) => <DevSvg color={color} /> },
  { key: '일상', Component: (color) => <DailySvg color={color} /> },
  { key: 'js/ts', Component: (color) => <JavaScript color={color} /> },
  { key: 'react', Component: (color) => <ReactSvg color={color} /> },
  { key: 'vue', Component: (color) => <VueSvg color={color} /> },
  { key: 'bitcoin', Component: (color) => <BtcSvg color={color} /> },
  { key: 'git', Component: (color) => <GitSvg color={color} /> },
  { key: 'cs', Component: (color) => <CsSvg color={color} /> },
]

const CategorySvg = ({ category }: { category?: string }) => {
  const Svg = categories.find((cat) => cat.key === category?.toLowerCase())
  const categoryTheme = theme.categoryColor.find((cat) => cat.key === category?.toLowerCase()) || { color: palette.primary }

  if (Svg) return Svg.Component(categoryTheme.color)
  return <DefaultSvg />
}

export default CategorySvg
