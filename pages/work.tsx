import styled from 'styled-components'
import WorkList from 'components/views/WorkList'
import Text from 'components/common/Text'
import { getWorks } from 'api/work/getWorks'
import { IWork } from 'type/work'

const WorkWrap = styled.div``

const Work = ({ workList }: { workList: IWork[] }) => {
  return (
    <WorkWrap>
      <Text type="h1" variant="heading_lg">
        🧑🏻‍💻 Work
      </Text>
      <br />
      {workList.map((work) => (
        <WorkList key={work.title} work={work} />
      ))}
      {workList.length === 0 && (
        <Text type="h1" variant="heading_sm">
          준비 중입니다 😎
        </Text>
      )}
    </WorkWrap>
  )
}

export const getStaticProps = async () => {
  try {
    const { data } = await getWorks()
    return {
      props: { workList: data },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { workList: [] },
    }
  }
}

export default Work
