import styled from 'styled-components'

export const Toggle = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-left: 6px;
`
export const ToggleButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  & > svg {
    color: '#000';
  }
  & > svg:hover {
  }
`
