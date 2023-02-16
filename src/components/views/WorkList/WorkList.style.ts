import styled from 'styled-components'
import Text from 'components/common/Text'
import { ColorModeTypes } from 'type/theme'
import { dark } from 'redux/slice/colorMode'

export const WorkListWrap = styled.ul`
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.BLG500};
`
export const ProjectTitle = styled(Text)<{ colorMode: ColorModeTypes }>`
  & > span {
    position: relative;
  }
  & > span::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 14px;
    background-color: ${({ theme, colorMode }) => {
      if (colorMode === dark) return theme.colors.gray.BLG600
      return theme.colors.gray.BLG300
    }};
    transition: 0.3s ease;
    z-index: -1;
  }
`
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
