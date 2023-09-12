import styled from '@emotion/styled'
import PostList from '@/components/oraganisms/PostList'

const HomeStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  // 메인 데스크탑 최소 높이
  min-height: calc(
    ${({ theme }) => theme.size.main} - (${({ theme }) => theme.size.header} + ${({ theme }) => theme.size.footer} + ${({ theme }) => theme.size.max})
  );

  ${({ theme }) =>
    theme.response.tablet(`
      min-height: calc(${theme.size.main} - (${theme.size.header} + ${theme.size.footer} + ${theme.size.lg} + ${theme.size.lg} + ${theme.size.lg}));
      padding-top: calc(${theme.size.header} + ${theme.size.lg});
    `)}
`

export default function Home() {
  return (
    <HomeStyled>
      <p>1</p>
      <PostList />
    </HomeStyled>
  )
}
