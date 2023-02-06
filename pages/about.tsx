import { type GetStaticProps, type GetStaticPropsResult } from 'next'
import styled from 'styled-components'
import Text from '../src/components/Text'
import Blog from '../src/components/Blog'
import { getPostList } from '../src/api/blog/getPosts'
import { type AboutPorps } from '../src/type/blog'

export const AboutStyled = styled.div`
  display: block;
  width: 100%;
  margin: 0;
  user-select: none;
  & > p {
    font-family: 'NanumBarunGothic';
    ${({ theme }) => theme.fontStyle.pc.text_lg}
  }
`

const About = ({ posts = [] }: AboutPorps) => {
  return (
    <>
      <AboutStyled>
        <p>1년 차 프론트엔드 개발자 이준희입니다. 꾸준함이 생명이라는 인생 모토를 가지고 있으며, 개발을 통해 이것저것 만드는 걸 좋아합니다.</p>
        <br />
        <p> 개발 지식을 기록하는 블로그를 운영하면서 지금까지 200개 이상 포스팅을 작성했고 현재 진행 중입니다.</p>
        <br />
        <p>최근 DX(Developer Experience)와 웹에서 앱과 같은 사용자 경험을 구현하는 데 관심이 있습니다.</p>
        <br />
        <p>겉으로 드러나지 않는 예민한 성격이지만 개발할 때는 사소한 디테일에도 신경을 쓰는 편이고 프로젝트 완성도를 높이는데 열정적입니다.</p>
        <br />
        <Text type="h3" variant="heading_md">
          🗒️ Recent posts
        </Text>
        <Blog posts={posts} />
      </AboutStyled>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (): Promise<GetStaticPropsResult<AboutPorps>> => {
  try {
    const { data } = await getPostList()
    return {
      props: { posts: data },
      revalidate: 60 * 60 * 24, // 1 day
    }
  } catch (e) {
    console.error(e)
    return {
      props: { posts: [] },
    }
  }
}

export default About
