import styled from 'styled-components'

interface IList {
  content: string
  id: string
}
interface IProjectList {
  title: string
  date: string
  list: IList[]
}

const ProjectWrap = styled.div``
const ProjectTitle = styled.h3``
const ProjectDate = styled.span``
const ProjectItemWrap = styled.ul``
const ProjectItem = styled.li``

const ProjectList = ({ title, date, list }: IProjectList) => {
  return (
    <ProjectWrap>
      <ProjectTitle>
        {title}
        <ProjectDate>{date}</ProjectDate>
      </ProjectTitle>
      <ProjectItemWrap>
        {list.map((item) => (
          <ProjectItem key={item.id}>{item.content}</ProjectItem>
        ))}
      </ProjectItemWrap>
    </ProjectWrap>
  )
}
export default ProjectList
