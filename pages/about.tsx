import styled from 'styled-components'

export const AboutStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  margin: 0;
  & > p {
    font-family: 'NanumBarunGothic';
    ${({ theme }) => theme.fontStyle.pc.heading_sm}
  }
`

const About = () => {
  return (
    <AboutStyled>
      <p>1년 차 프론트엔드 개발자 이준희입니다.</p>
      <p>꾸준함이 생명이라는 인생 모토를 가지고 있으며, 개발을 통해 이것저것 만드는 걸 좋아합니다.</p>
      <p>새로 알게 된 개발 내용을 기록하는 블로그를 운영하면서 지금까지 200개 이상 포스팅을 작성했고 현재 진행 중입니다.</p>
      <p>최근 DX(Developer Experience)와 웹에서 앱과 같은 사용자 경험을 구현하는 데 관심이 있습니다.</p>
    </AboutStyled>
  )
}

export default About
