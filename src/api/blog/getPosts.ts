import { type AxiosResponse } from 'axios'
import nextApi from '../../utils/nextApi'
import { PostTypes } from '../../type/blog'

export const getPostList = (): Promise<AxiosResponse<PostTypes[]>> => {
  const url = '/api/blog/getPosts'
  return nextApi.get(url)
}
