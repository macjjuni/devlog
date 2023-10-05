import { NextApiResponse } from 'next'
import notion from '@/lib/noiton'
import routes from '@/route'
import { IPage, ICategory } from '@/types/notion'

/**
 * 사이트맵 생성
 * 기존 정적 페이지들 lastmod 날짜 자동으로 넣어줄 수 있는 방법 고민해보기..
 * ======= 대안 =======
 * 1. 깃 레포 최근 수정일 구해서 넣기
 * 2. 노션에 일일이 기입해서.. (X)
 * 3. ...
 */

const domain = process.env.NEXT_PUBLIC_DOMAIN || ''

function generateSiteMap(pages?: IPage[], cate?: ICategory) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${domain}</loc>
     </url>
     ${routes
       .map((route) => {
         return `
        <url>
          <loc>${`${domain}${route.path}`}</loc>
          <lastmod>2023-10-05</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
      `
       })
       .join('')}
      ${
        cate?.map(({ name }) => {
          return `
          <url>
          <loc>${`${domain}/blog/category/${encodeURIComponent(name)}`}</loc>
          <lastmod>2023-10-05</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.6</priority>
      </url>
        `
        }) || ''
      }
      ${
        pages
          ? pages
              .map(({ id, published }) => {
                return `
      <url>
          <loc>${`${domain}/blog/${id}`}</loc>
          <lastmod>${published}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
      </url>
    `
              })
              .join('')
          : ''
      }
   </urlset>
 `
}

function SiteMap() {}

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
  res.setHeader('Content-Type', 'text/xml')
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID || ''

  try {
    if (databaseId === '') throw Error('Not found database ID!')

    const pages = await notion.getAllPage(databaseId)
    const { category } = notion.getParseNotionInfo(await notion.getNotionInfo(databaseId))

    const sitemap = generateSiteMap(pages, category)
    res.write(sitemap)
  } catch (err) {
    const sitemap = generateSiteMap()
    res.write(sitemap)
    console.error(err)
  }
  res.end()

  return { props: {} }
}

export default SiteMap
