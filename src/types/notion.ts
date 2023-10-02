import type { MultiSelectPropertyItemObjectResponse, SelectPropertyItemObjectResponse } from '@notionhq/client/build/src/api-endpoints'

// 노션 색상 타입
type SelectColor = 'default' | 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red'
export type SelectPropertyResponse = {
  id: string
  name: string
  color: SelectColor
}

export type ICategory = SelectPropertyResponse[] | null

// 노전 블로그 정보 타입
export interface INotionInfo {
  title: string
  description: string
  coverURL: string | null
  icon: string
  tags: {
    options: SelectPropertyResponse[]
  } | null
  category: ICategory
}

// 노션 프로젝트 정보 타입
export interface INotionProject {
  title: string
  emoji: string
}

// 노션 페이지 타입
export interface IPage {
  id: string
  cover: string
  title: string
  category: SelectPropertyItemObjectResponse['select'] | null
  published: string
  tags: MultiSelectPropertyItemObjectResponse['multi_select']
}

// 노션 페이지 타입
export interface IProjectPage {
  id: string
  cover: string
  title: string
  published: string
  stack: MultiSelectPropertyItemObjectResponse['multi_select']
}

export interface DatabaseQueryOption {
  categoryName?: string
  title?: string
}

// 글 목록 리스트 받는 페이지 Props 타입
export interface IBlogPage {
  info: INotionInfo
  pages: IPage[]
}

// 방명록 타입
export interface IGuestBook {
  id: string // Notion Block 데이터에서 사용하고 렌더링 시 key값으로 사용
  content: string // 댓글 내용
  name: string // 작성자 이름
  email: string
  image: string // 작성자 프로필 이미지 주소
  created: string // Notion Block 데이터에서 사용하고 작성 년월일시분
  secret: boolean // 숨김 여부
  ip: string // 작성자 IP
}

// 방명록 리스트 호출 결과 타입
export interface IGuestBookResult {
  list: ReadGuestBookType[]
  status: boolean
}
// 방명록 생성, 삭제 결과 타입
export interface IGuestBookPostResult {
  status: boolean
}

// 방명록 생성 파라미터 타입
export type CreateRequestGuestBookType = Pick<IGuestBook, 'content' | 'name' | 'image' | 'secret' | 'email'>
// 방명록 저장 할 때 파라미터 타입
export type SaveRequestGuestBookType = Pick<IGuestBook, 'content' | 'name' | 'image' | 'secret' | 'ip' | 'email'>
// 방명록 읽어올 때 파라미터 타입
export type ReadGuestBookType = Pick<IGuestBook, 'id' | 'content' | 'name' | 'image' | 'secret' | 'created' | 'email'>
