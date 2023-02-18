import { MultiSelectPropertyItemObjectResponse, SelectPropertyItemObjectResponse } from '@notionhq/client/build/src/api-endpoints'

export type IconType =
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

export interface CardData {
  id: string
  cover: string
  title: string
  category: SelectPropertyItemObjectResponse['select'] | null
  published: string
  tags: MultiSelectPropertyItemObjectResponse['multi_select']
}
