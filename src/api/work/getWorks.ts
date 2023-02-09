import { type AxiosResponse } from 'axios'
import nextApi from '../../utils/nextApi'
import { IWork } from '../../type/work'

export const getWorks = (): Promise<AxiosResponse<IWork[]>> => {
  const url = '/api/work/getWorks'
  return nextApi.get(url)
}
