import * as Work from '../style'
import ProjectList from './projectList'
import { type IWork } from '../type'

const WorkItem = ({ title, position, date, project }: IWork) => {
  return (
    <Work.WorkItemWrap>
      <Work.WorkTitle>
        {title} ------------------ <Work.WorkDate>{date}</Work.WorkDate>
      </Work.WorkTitle>
      <Work.WorkPosition>{position}</Work.WorkPosition>
      {project.map((proj) => (
        <ProjectList key={proj.title + proj.date} title={proj.title} date={proj.date} list={proj.list} />
      ))}
    </Work.WorkItemWrap>
  )
}
export default WorkItem
