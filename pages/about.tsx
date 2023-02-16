import styled from 'styled-components'
import Text from 'components/common/Text'
import Mail from 'components/views/Mail'

export const AboutStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  user-select: none;
  & > div {
    width: 100%;
  }

  @media ${({ theme }) => theme.device.mobile} {
    display: block;
  }
`
const Spacer = styled.div`
  height: 40px;
`
const BlankDiv = styled.div`
  height: 300px;
`

const About = () => {
  return (
    <AboutStyled>
      <BlankDiv />
      <div>
        <Text type="h1" variant="heading_lg">
          🙋🏻‍♂️ About
        </Text>
        <Spacer />
        <Text type="h2" variant="heading_sm">
          안녕하세요? 👋
          <br />
          이것저것 만들기 좋아하는 개발자입니다!
        </Text>
        <Spacer />
        <Text type="h2" variant="heading_sm">
          저에게 관심이 있으시거나, 궁금한 점이 있다면,
          <br />
          아래 이메일로 언제든지 연락주세요.
        </Text>
        <Mail />
      </div>
    </AboutStyled>
  )
}

export default About
