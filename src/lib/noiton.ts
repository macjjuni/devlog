import { Client } from '@notionhq/client'
import { NotionAPI } from 'notion-client'
import { getPageContentBlockIds, getBlockTitle } from 'notion-utils'

import type {
  PageObjectResponse,
  DatabaseObjectResponse,
  ListBlockChildrenResponse,
  ParagraphBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'
import type { DatabaseQueryOption, IPage, INotionInfo, ReadGuestBookType, SaveRequestGuestBookType } from '@/types/notion'
import type { ExtendedRecordMap, Role, Block } from 'notion-types'
import config, { token } from '@/config/notion.config'
import date from './date'

const { propertyTable, blog, post } = config
const { activeUser, auth, authToken } = token

const defaultThumb = blog.siteURL + blog.defaultThumb

// 공식 노션 객체 생성
export const notionClient = new Client({ auth })
// 비공식 노션 객체 생성
export const notionApi = new NotionAPI({ activeUser, authToken, userLocale: 'ko-KR/autodetect' })

const notion = {
  getNotionInfo: async (databaseId: string): Promise<INotionInfo> => {
    // 블로그 정보 조회
    const notionInfo = (await notionClient.databases.retrieve({ database_id: databaseId })) as DatabaseObjectResponse

    const title = notionInfo.title[0]?.type === 'text' ? notionInfo.title[0].plain_text : ''
    const description = notionInfo.description[0]?.type === 'text' ? notionInfo.description[0].plain_text : ''
    const coverURL = notionInfo.description[1] !== undefined ? notionInfo.description[1]?.href : '' // 블로그 목록 썸네일
    const icon = notionInfo.icon?.type === 'emoji' ? notionInfo.icon.emoji : ''
    const tags = notionInfo.properties['태그'].type === 'multi_select' ? notionInfo.properties['태그'].multi_select : null
    const category = notionInfo.properties['카테고리'].type === 'select' ? notionInfo.properties['카테고리'].select.options : null
    return { title, description, coverURL, icon, tags, category }
  },
  // 블로그 리스트 데이터 가공
  getParsePages: (pages: PageObjectResponse[]): IPage[] => {
    return pages.map((page) => {
      const { id } = page
      const { 이름, 카테고리, 작성일, 태그 } = page.properties
      const title = 이름?.type === 'title' ? 이름.title[0].plain_text : ''
      const cover = defaultThumb
      const published = 작성일?.type === 'date' && 작성일.date?.start ? 작성일.date.start : ''
      const category = 카테고리?.type === 'select' ? 카테고리?.select : null
      const tags = 태그?.type === 'multi_select' ? 태그.multi_select : []

      return { id, title, category, published, tags, cover }
    })
  },
  // 모든 페이지 리스트 검색
  getAllPage: async (datbaseId: string, option?: DatabaseQueryOption): Promise<IPage[]> => {
    // 모든 글 목록 가져오기
    const allPage = await notionClient.databases.query({
      database_id: datbaseId,
      filter: {
        and: [
          {
            property: propertyTable.Published,
            // 공개인 포스팅만 가져오기
            status: { equals: '공개' },
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
        // 작성일 기준 정렬
        { property: propertyTable.Date, direction: 'descending' },
      ],
    })
    const pages = allPage.results as PageObjectResponse[]
    // 블로그 목록 데이터 가공 후 반환
    return notion.getParsePages(pages)
  },
  // 특정 페이지 리스트 검색
  getPage: async (id: string) => {
    const page = await notionClient.pages.retrieve({ page_id: id })
    return page
  },
  // 페이지 검색
  getSelectPage: async (query: string) => {
    const searchPages = await notionClient.search({
      query,
      filter: {
        value: 'page',
        property: 'object',
      },
      sort: {
        direction: 'descending',
        timestamp: 'last_edited_time',
      },
      page_size: post.POSTS_PER_PAGE,
    })
    const pages = searchPages.results as PageObjectResponse[]
    const currentPages = pages.filter((page) => page.parent.type === 'database_id') // 다른 노션 페이지 삭제
    // 공개 페이지만 필터링
    const filteredPages = currentPages.filter((item) => item.properties['상태'].type === 'status' && item.properties['상태'].status?.name === '공개')
    return notion.getParsePages(filteredPages)
  },
  // 페이지 상세 조회
  getDetailPage: async (id: string) => notionApi.getPage(id), // recordMap
  // 방명록 댓글 목록 조회해서 데이터 가공 후 반환
  getGuestBookList: async (id: string): Promise<ReadGuestBookType[]> => {
    const response = await notionClient.blocks.children.list({
      block_id: id,
      page_size: 50,
    })
    return notion.parseGuestbook(response)
  },
  // 방명록 목록 깔끔하게 정리해서 내보내기
  parseGuestbook: (guestBooks: ListBlockChildrenResponse): ReadGuestBookType[] => {
    const lists: ReadGuestBookType[] = []
    if (guestBooks.results.length === 0) return []
    guestBooks.results.forEach((item) => {
      const target = item as ParagraphBlockObjectResponse
      if (target.type !== 'paragraph') return
      const paragraph = JSON.parse(target.paragraph.rich_text[0]?.plain_text)
      if (!paragraph) return
      lists.push({
        id: target.id,
        created: target.created_time,
        content: !paragraph.secret ? paragraph.content : '', // 비밀글일 경우 내용 숨기기
        name: paragraph.name,
        email: paragraph.email,
        image: paragraph.image,
        secret: paragraph.secret,
      })
    })
    return lists.sort((a, b) => date.diff(b.created, a.created)) // 작성일로 정렬
  },
  createGuestBook: async (id: string, body: SaveRequestGuestBookType) => {
    try {
      await notionClient.blocks.children.append({
        block_id: id,
        children: [
          {
            paragraph: {
              rich_text: [
                {
                  text: {
                    content: JSON.stringify(body),
                  },
                },
              ],
            },
          },
        ],
      })
    } catch (err) {
      console.error(err)
    }
  },
  removeGuestBook: async (block_id: string): Promise<void> => {
    await notionClient.blocks.delete({ block_id })
  },
}

interface ICleanBlock {
  role: Role
  value: Block
}

const cotainsType = ['header', 'sub_header', 'text']

export const getHeadDescription = (recordMap: ExtendedRecordMap) => {
  const blocks = getPageContentBlockIds(recordMap)

  const blockArr = blocks.map((blockId) => {
    if (cotainsType.includes(recordMap.block[blockId].value.type) && recordMap.block[blockId].value.properties) return recordMap.block[blockId]
  })

  // undefined 제외하고 성능 향상을 위해 블럭 5개 까지만 남기기
  const cleanBlockArr = blockArr.filter((block): block is ICleanBlock => block !== undefined).slice(0, 5)

  let contentText = ''
  // 문자열 없는 경우 빈 문자열 반환
  if (cleanBlockArr.length === 0) return contentText

  // 있는 경우 모두 합쳐서 100 글자 까지만 남기고 반환
  for (let i = 0; i < cleanBlockArr.length; i += 1) {
    const getBlcokText = getBlockTitle(cleanBlockArr[i].value, recordMap)
    contentText += `${getBlcokText} `
  }

  return contentText.substring(0, 100)
}

export default notion
