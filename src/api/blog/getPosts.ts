import axios, { AxiosResponse } from 'axios'
import { PostTypes } from '../../type/blog'

export const getPostList = (): Promise<AxiosResponse<PostTypes[]>> => {
  const url = `http://localhost:${process.env.PORT}/api/blog/getPosts`
  return axios.get(url)
}
