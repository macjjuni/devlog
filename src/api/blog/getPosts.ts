import axios, { AxiosResponse } from 'axios'
import { PostTypes } from '../../type/blog'

const port = process.env.PORT || 3000

export const getPostList = (): Promise<AxiosResponse<PostTypes[]>> => {
  const url = `http://localhost:${port}/api/blog/getPosts`
  return axios.get(url)
}
