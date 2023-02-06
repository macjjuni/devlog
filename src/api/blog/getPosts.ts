import axios, { AxiosResponse } from 'axios'
import { PostTypes } from '../../type/blog'

const port = process.env.PORT || 3000
const url = process.env.NODE_ENV === 'development' ? `http://localhost:${port}/api/blog/getPosts` : `/api/blog/getPosts`

export const getPostList = (): Promise<AxiosResponse<PostTypes[]>> => {
  return axios.get(url)
}
