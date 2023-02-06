import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosResponse } from 'axios'
import { load } from 'cheerio'

// 가져올 포스팅 개수
const postCnt = 4

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    axios
      .get('https://juni-official.tistory.com/')
      .then((response: AxiosResponse<string>) => {
        const $ = load(response.data)
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
      })
      .catch((err) => {
        res.status(404).send([])
        console.log(err)
      })
  }
}
