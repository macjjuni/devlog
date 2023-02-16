import { type IProject } from 'type/work'
import { useAppSelector } from 'redux/hook'
import Text from 'components/common/Text'
import * as Work from '../WorkList.style'

const ProjectList = ({ title, date, list }: IProject) => {
  const colorMode = useAppSelector((state) => state.colorMode.theme)
  return (
    <Work.ProjectWrap>
      <Work.ProjectTitle type="h3" variant="text_strong" colorMode={colorMode} ellipsis fullwidth>
        <span title={title}>{title}</span>
      </Work.ProjectTitle>
      <Work.ProjectDate type="h3" variant="text_sm" ellipsis>
        {date}
      </Work.ProjectDate>
      <Work.ProjectItemWrap>
        {list.map((item) => (
          <Work.ProjectItem key={item.id}>
            <Text type="p" variant="text_md">
              {item.content}
            </Text>
          </Work.ProjectItem>
        ))}
      </Work.ProjectItemWrap>
    </Work.ProjectWrap>
  )
}
export default ProjectList
