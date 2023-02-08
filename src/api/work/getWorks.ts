import { type AxiosResponse } from 'axios'
import nextApi from '../../utils/nextApi'
import { IWork } from '../../components/workList/type'

export const getWorks = (): Promise<AxiosResponse<IWork[]>> => {
  const url = '/api/work/getWorks'
  return nextApi.get(url)
}
