import styled from 'styled-components'

const LayoutsTyled = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.size.max};
  overflow: hidden;

  // 반응형: 테블릿
  ${({ theme }) =>
    theme.response.tablet(`
    padding: ${theme.size.lg};
  `)}

  padding-bottom: 0;
`

export default LayoutsTyled
