import styled from 'styled-components'
import WorkList from '../src/components/workList'
import { getWorks } from '../src/api/work/getWorks'
import { IWork } from '../src/type/work'

const WorkWrap = styled.div``

const Work = ({ workList }: { workList: IWork[] }) => {
  return (
    <WorkWrap>
      {workList.map((work) => (
        <WorkList key={work.title} work={work} />
      ))}
      {workList.length === 0 && <h2>작성 중입니다 😎</h2>}
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
      props: {
        workList: [],
      },
    }
  }
}

export default Work
