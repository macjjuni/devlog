import styled from 'styled-components'

export const PostWrap = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const PostItem = styled.li`
  display: block;
  border-bottom: 1px solid #eee;
  padding: 18px 6px;

  & > a {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }
`
export const Category = styled.p`
  ${({ theme }) => theme.fontStyle.desktop.text_md};
  color: ${({ theme }) => theme.colors.primary.MAIN};
  font-weight: bold;
`
export const Title = styled.h2`
  ${({ theme }) => theme.fontStyle.desktop.heading_sm};
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`
export const Published = styled.p`
  ${({ theme }) => theme.fontStyle.desktop.text_sm};
  color: ${({ theme }) => theme.colors.gray.BLG600};
`
export const TagList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin-top: 10px;
  height: 28px;
`

export const Tag = styled.li`
  ${({ theme }) => theme.fontStyle.desktop.text_md};
  color: ${({ theme }) => theme.colors.gray.BLG700};
  &:hover {
    text-decoration: underline;
  }
`
