import { type AxiosResponse } from 'axios'
import nextApi from '../../utils/axios'
import { IWork } from '../../types/work'

export const getWorks = (): Promise<AxiosResponse<IWork[]>> => {
  const url = '/api/work/getWorks'
  return nextApi.get(url)
}
