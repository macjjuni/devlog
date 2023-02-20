import { MultiSelectPropertyItemObjectResponse, SelectPropertyItemObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { COLOR_TABLE } from 'styles/notion/notion.style'

type StringRequest = string
type SelectColor = 'default' | 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red'
export type SelectPropertyResponse = {
  id: StringRequest
  name: StringRequest
  color: SelectColor
}

export type IIcon =
  | {
      type: 'emoji'
      emoji: string
    }
  | {
      type: 'url'
      url: string
      proxyUrl: string
    }
  | null

export interface ICard {
  id: string
  cover: string
  title: string
  category: SelectPropertyItemObjectResponse['select'] | null
  published: string
  tags: MultiSelectPropertyItemObjectResponse['multi_select']
}

export interface ITag {
  id?: string
  name: string
  color: keyof typeof COLOR_TABLE
}

export interface IBlogData {
  title: string
  description: string
  coverURL: string
  icon: string
  tags: {
    options: SelectPropertyResponse[]
  } | null
  category: {
    options: SelectPropertyResponse[]
  } | null
}
