import axios, { AxiosResponse } from 'axios'
import { PostTypes } from '../../type/blog'

const port = process.env.PORT || 3000
const domain = process.env.DOMAIN || 'http://localhost'
const host = process.env.NODE_ENV === 'development' ? `${domain}:${port}` : domain

export const getPostList = (): Promise<AxiosResponse<PostTypes[]>> => {
  const url = `${host}/api/blog/getPosts`
  return axios.get(url)
}
