import { type IProject } from 'type/work'
import * as Work from '../WorkList.style'

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
