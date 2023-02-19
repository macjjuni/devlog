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
  height: 32px;
`
const BlankDiv = styled.div`
  height: 300px;
`

const Home = () => {
  return (
    <AboutStyled>
      <BlankDiv />
      <div>
        <Text type="h1" variant="heading_lg" className="fwb fsi">
          About
        </Text>
        <Spacer />
        <Text type="h2" variant="text_lg">
          안녕하세요? 👋
          <br />
          이것저것 만들기 좋아하는 프론트엔드 개발자 이준희입니다.
        </Text>
        <Spacer />
        <Text type="h2" variant="text_lg">
          꾸준함이 생명이라는 인생 모토를 가지고 있고,
          <br />
          새로 알게 된 개발 지식을{' '}
          <a rel="noreferrer" href="https://juni-official.tistory.com/" title="꾸생의 DevLog" target="_blank">
            <u>블로그</u>
          </a>
          에 기록하는 습관을 가지고 있습니다.
        </Text>
        <Spacer />
        <Text type="p" variant="text_lg">
          겉으로 드러나지 않는 예민한 성격으로 개발할 때는 사소한 디테일에도 신경을 쓰는 편이고 프로젝트 완성도를 높이는데 열정적입니다.
        </Text>
        <Spacer />
        <Text type="h2" variant="text_lg">
          저에게 관심이 있으시거나, 궁금한 점이 있다면,
          <br />
          이력서 또는 언제든 메일 보내주세요!
        </Text>
        <Spacer />
        <Mail />
      </div>
    </AboutStyled>
  )
}

export default Home
