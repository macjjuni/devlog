import styled from '@emotion/styled'

const LayoutsTyled = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.size.max};

  // 반응형: 테블릿
  ${({ theme }) =>
    theme.response.tablet(`
    padding: ${theme.size.lg};
  `)}

  padding-bottom: 0;
`

export default LayoutsTyled
