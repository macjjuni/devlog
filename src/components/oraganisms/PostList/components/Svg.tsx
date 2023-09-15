import styled from 'styled-components'
import DailySvg from '@/components/molecule/CategorySvg/components/svg/DailySvg'
import ReactSvg from '@/components/molecule/CategorySvg/components/svg/ReactSvg'
import VueSvg from '@/components/molecule/CategorySvg/components/VueSvg'
import BtcSvg from '@/components/molecule/CategorySvg/components/svg/BtcSvg'
import DevSvg from '@/components/molecule/CategorySvg/components/svg/DevSvg'
import TypeScriptSvg from '@/components/molecule/CategorySvg/components/svg/TypeScriptSvg'
import JavaScript from '@/components/molecule/CategorySvg/components/svg/JavaScript'

interface ISvg {
  $category?: string
}

interface ICategorySvg {
  key: string
  component: React.ReactNode
}

const SvgStyled = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.size.md};
  right: ${({ theme }) => theme.size.md};
  margin: 0;
  z-index: 0;
  width: px;
  height: 130px;
`

const categorySvg: ICategorySvg[] = [
  { key: 'dev', component: <DevSvg /> },
  { key: 'daily', component: <DailySvg /> },
  { key: 'react', component: <ReactSvg /> },
  { key: 'typescript', component: <TypeScriptSvg /> },
  { key: 'javascript', component: <JavaScript /> },
  { key: 'vue', component: <VueSvg /> },
  { key: 'bitcoin', component: <BtcSvg /> },
]

const Svg = ({ $category }: ISvg) => {
  if (!$category) return <>...</>
  const target = categorySvg.find((cateSvg) => $category.toLowerCase().includes(cateSvg.key))

  if (target) return <SvgStyled>{target.component}</SvgStyled>
  return <>...</>
}
export default Svg
