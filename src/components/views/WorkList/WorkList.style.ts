import styled from 'styled-components'
import Text from 'components/common/Text'

export const WorkListWrap = styled.ul`
  font-family: 'NanumBarunGothic';
  padding: 16px 0;
  user-select: none;
`
export const WorkItemWrap = styled.li``

export const WorkTitle = styled(Text)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const WorkDate = styled(Text)``
export const WorkPosition = styled(Text)`
  margin-bottom: 10px;
`

export const ProjectWrap = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid #000;
`
export const ProjectTitle = styled(Text)``
export const ProjectDate = styled(Text)``
export const ProjectItemWrap = styled.ul`
  list-style: disc;
  margin-top: 15px;
  padding-left: 15px;
`
export const ProjectItem = styled.li`
  & > p {
    position: relative;
    left: -3px;
    line-height: 26px;
  }
`
