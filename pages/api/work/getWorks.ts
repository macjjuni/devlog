import type { NextApiRequest, NextApiResponse } from 'next'
import { type IWork } from '../../../src/components/workList/type'

const workList: IWork[] = [
  // {
  //   title: '(주)인프라큐브',
  //   position: '개발팀 - 프런트엔드 리더',
  //   date: '2022.03 - 현재 재직중',
  //   project: [
  //     {
  //       title: '사내 프론트엔드 기술 스터디 주도',
  //       date: '2022.09 - 2023.02',
  //       list: [
  //         { id: '1', content: '최신기술스택트렌드및인프런,원티드등다양한플랫폼을활용한스터디주도' },
  //         { id: '2', content: '최근 원티드 프리온보딩 프론트엔드 챌린지에 참여해 스터디 진행' },
  //       ],
  //     },
  //     {
  //       title: '사내 디자인 시스템 및 보일러플레이트 개발',
  //       date: '2023.01 - 2023.02',
  //       list: [
  //         { id: '1', content: '프로젝트구조설계및각종컴포넌트개발' },
  //         { id: '2', content: '- 사용 기술: React, TypeScript, Styled-Components, React-Query, msw, Vite' },
  //       ],
  //     },
  //     {
  //       title: 'SPC 삼립 통합 비용관리 시스템(추가개발) 프론트엔드 개발',
  //       date: '2023.01 - 2023.02',
  //       list: [
  //         { id: '1', content: '반품/거래처/상품/정산기능 및 UI 개발' },
  //         { id: '2', content: '- 사용 기술: Vue, JavaScript, Vue-Element, Sass' },
  //       ],
  //     },
  //     {
  //       title: '남양주도시공사 통합관리자&센터운영프로그램 유지보수',
  //       date: '2022.11 - 2022.12',
  //       list: [
  //         { id: '1', content: '대관관리기능및UI개발' },
  //         { id: '2', content: '- 사용 기술: React, JavaScript, Redux, MUI, Sass' },
  //       ],
  //     },
  //     {
  //       title: 'SPC 삼립 통합 비용관리 시스템 프론트엔드 개발',
  //       date: '2022.06 - 2022.10',
  //       list: [
  //         { id: '1', content: '비용관리 백오피스 기능 및 UI 개발(기여도 60%)' },
  //         { id: '2', content: '크로스 브라우징 이슈 대응(IE11)' },
  //         { id: '3', content: '- 사용 기술: Vue, JavaScript, Vue-Element, Sass' },
  //       ],
  //     },
  //     {
  //       title: 'SPC 삼립 통합 주문관리 시스템 프론트엔드 개발',
  //       date: '2022.04 - 2022.07',
  //       list: [
  //         { id: '1', content: '리드 프론트엔드 개발자로 통합주문 관리 기능 개발(기여도 70%)' },
  //         { id: '2', content: '크로스 브라우징 이슈 대응(IE11)' },
  //         { id: '3', content: '- 사용 기술: Vue, JavaScript, Vue-Element, Sass' },
  //       ],
  //     },
  //     {
  //       title: 'FitCUBE SaaS Cloud Service Solution 백오피스 프론트엔드 개발',
  //       date: '2022.03 - 2022.05',
  //       list: [
  //         { id: '1', content: '회원및시설관리예약통합솔루션백오피스개발' },
  //         { id: '2', content: '기존 클래스형 컴포넌트로 구축된 프로젝트를 함수형 컴포넌트로 마이그레이션' },
  //         { id: '3', content: '- 사용 기술: React, Redux, JavaScript, CSS3' },
  //       ],
  //     },
  //   ],
  // },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).send(workList)
  }
}
