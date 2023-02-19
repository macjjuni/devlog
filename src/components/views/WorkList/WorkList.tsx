import { type IWork } from 'types/work'
import WorkItem from './components/WorkItem'
import { WorkListWrap } from './WorkList.style'

const WorkList = ({ work }: { work: IWork }) => {
  return (
    <WorkListWrap>
      <WorkItem title={work.title} date={work.date} position={work.position} project={work.project} />
    </WorkListWrap>
  )
}

export default WorkList
