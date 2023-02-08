import * as Work from '../style'
import { type IProject } from '../type'

const ProjectList = ({ title, date, list }: IProject) => {
  return (
    <Work.ProjectWrap>
      <Work.ProjectTitle>
        {title}
        <Work.ProjectDate>{date}</Work.ProjectDate>
      </Work.ProjectTitle>
      <Work.ProjectItemWrap>
        {list.map((item) => (
          <Work.ProjectItem key={item.id}>{item.content}</Work.ProjectItem>
        ))}
      </Work.ProjectItemWrap>
    </Work.ProjectWrap>
  )
}
export default ProjectList
