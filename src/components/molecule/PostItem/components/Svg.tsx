import styled from '@emotion/styled'
import DailySvg from '@/components/svg/DailySvg'
import ReactSvg from '@/components/svg/ReactSvg'
import VueSvg from '@/components/svg/VueSvg'
import BtcSvg from '@/components/svg/BtcSvg'
import DevSvg from '@/components/svg/DevSvg'
import TypeScriptSvg from '@/components/svg/TypeScriptSvg'

interface ISvg {
  text: string
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
  width: 150px;
  height: 150px;
`

const categorySvg: ICategorySvg[] = [
  { key: 'dev', component: <DevSvg /> },
  { key: 'daily', component: <DailySvg /> },
  { key: 'react', component: <ReactSvg /> },
  { key: 'typescript', component: <TypeScriptSvg /> },
  { key: 'vue', component: <VueSvg /> },
  { key: 'bitcoin', component: <BtcSvg /> },
]

const Svg = ({ text }: ISvg) => {
  const target = categorySvg.find((cateSvg) => text.toLowerCase().includes(cateSvg.key))

  if (target) return <SvgStyled>{target.component}</SvgStyled>
  return <>...</>
}
export default Svg
