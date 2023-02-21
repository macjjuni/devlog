import { Client } from '@notionhq/client'
import type { PageObjectResponse, DatabaseObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { NotionAPI } from 'notion-client'

export const propertyTable = {
  Date: '작성일',
  Published: '상태',
  Tags: '태그',
  Category: '카테고리',
}

// 노션 API 초기화
export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

// 노션 비공식 API 초기화
export const reactNotionApi = new NotionAPI({
  activeUser: process.env.NOTION_USER,
  authToken: process.env.NOTION_TOKEN_V2,
  userLocale: 'ko-KR/autodetect',
})

export interface DatabaseQueryOption {
  categoryName?: string
}

// 글 목록 조회
export const getDatabaseItems = async (databaseId: string, option?: DatabaseQueryOption) => {
  const databaseItems = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: propertyTable.Published,
          status: {
            // 공개인 포스팅만 가져오기
            equals: '공개',
          },
        },
        {
          property: propertyTable.Category,
          select: {
            equals: option?.categoryName ? option.categoryName : '',
          },
        },
      ],
    },
    sorts: [
      {
        // 작성일 기준 정렬
        property: propertyTable.Date,
        direction: 'descending',
      },
    ],
  })

  return databaseItems.results
}

// 글 조회
export const getPageContent = async (pageId: string) => {
  const recordMap = await reactNotionApi.getPage(pageId)
  return recordMap
}

// 글 검색
export const getSearchItems = async (query: string) => {
  const searchItems = await notion.search({
    query,
    sort: {
      direction: 'descending',
      timestamp: 'last_edited_time',
    },
    filter: {
      property: 'object',
      value: 'page',
    },
    page_size: 12,
  })
  return searchItems.results as PageObjectResponse[]
}

// // 태그 및 정보 조회
// interface InitBlogInfo {
//   thumb: string
//   tags: string[]
//   icon: string
// }

export const initBlogInfo = async (databaseId: string) => {
  const database = (await notion.databases.retrieve({ database_id: databaseId })) as DatabaseObjectResponse
  const title = database.title[0]?.type === 'text' ? database.title[0].plain_text : ''
  const description = database.description[0]?.type === 'text' ? database.description[0].plain_text : ''
  const coverURL = database.cover?.type === 'file' ? database.cover?.file.url : ''
  const icon = database.icon?.type === 'emoji' ? database.icon.emoji : ''
  const tags = database.properties['태그'].type === 'multi_select' ? database.properties['태그'].multi_select : null
  const category = database.properties['카테고리'].type === 'select' ? database.properties['카테고리'].select : null

  return {
    title,
    description,
    coverURL,
    icon,
    tags,
    category,
  }
}
