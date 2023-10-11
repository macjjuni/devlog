import type { IProjectPage } from '@/@types/notion'
import ProjectItem from './components/ProjectItem'

const defaultStyle = 'flex justify-start gap-xxl flex-wrap'

export default function ProjectList({ pages }: { pages: IProjectPage[] }) {
  return <div className={defaultStyle}>{pages?.map((page) => <ProjectItem key={page.id} page={page} />)}</div>
}
