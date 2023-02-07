import styled from 'styled-components'
import Text from '../src/components/text'
import Mail from '../src/components/mail'

const IndexStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  user-select: none;
  & > p {
    font-family: 'NanumBarunGothic';
  }
`
const Spacer = styled.div`
  height: 40px;
`

const Home = () => {
  return (
    <IndexStyled>
      <Text type="p" variant="heading_sm">
        안녕하세요? 👋
        <br />
        이것저것 만들기 좋아하는 개발자입니다!
      </Text>
      <Spacer />
      <Text type="p" variant="heading_sm">
        저에게 관심이 있으시거나, 궁금한 점이 있다면,
        <br />
        아래 이메일로 언제든지 연락주세요.
      </Text>
      <Mail />
    </IndexStyled>
  )
}

export default Home
