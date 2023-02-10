import styled from 'styled-components'
import Link from 'next/link'
import Text from 'components/common/Text'
import Lotties from 'components/common/Lotties'
import errorLottie from 'assets/lottie/error-page-not-found.json'

const ErrorLayout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 100px;

  & a {
    border: 1px solid ${({ theme }) => theme.colors.primary.MAIN};
    color: ${({ theme }) => theme.colors.primary.MAIN};
    padding: 4px 15px;
    border-radius: 4px;
    transition: 0.5s ease;
  }
  & a:hover {
    color: ${({ theme }) => theme.colors.primary.MED};
    background-color: ${({ theme }) => theme.colors.primary.LIGHT};
  }
`
// Lottie Option
const defaultOption = {
  loop: true,
  play: true,
  style: {
    width: '200px',
    height: '200px',
    margin: '0',
  },
}

const Error = () => {
  return (
    <ErrorLayout>
      <Lotties defaultOption={defaultOption} animationData={errorLottie} />
      <Text type="h3" variant="heading_lg">
        404 - Not Found
      </Text>
      <br />
      <Link href="/">
        <Text type="span" variant="text_lg">
          Go Home
        </Text>
      </Link>
    </ErrorLayout>
  )
}

export default Error
