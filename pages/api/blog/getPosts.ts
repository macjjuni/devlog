import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import * as cheerio from 'cheerio'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const postCnt = 4
    try {
      const html = await axios.get('https://juni-official.tistory.com/')
      const htmlData = html.data as string
      const $ = cheerio.load(htmlData)
      const $post = $('.article-wrap')
      const postList = []

      for (let i = 1; i < postCnt; i++) {
        postList.push({
          title: $post.find(`.post-item:nth-child(${i}) .post-bottom-wrap .post-article-title`).text().trim(),
          thumb: $post.find(`.post-item:nth-child(${i}) .post-link .post-thumb-wrap > img`).attr('src'),
          link: $post.find(`.post-item:nth-child(${i}) > .post-link`).attr('href'),
          date: $post.find(`.post-item:nth-child(${i}) .post-bottom-wrap .post-date`).text().substr(0, 10),
        })
      }
      res.status(200).send(postList)
    } catch (err) {
      res.status(200).send(null)
      console.log(err)
    }
  } else {
    res.status(404).send({ error: 'Not Found' })
  }
}
