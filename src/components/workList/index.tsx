import { WorkListWrap } from './style'
import WorkItem from './components/workItem'
import { type IWork } from './type'

const WorkList = ({ work }: { work: IWork }) => {
  return (
    <WorkListWrap>
      <WorkItem title={work.title} date={work.date} position={work.position} project={work.project} />
    </WorkListWrap>
  )
}

export default WorkList
