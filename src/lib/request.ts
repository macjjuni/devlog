// type MethodTypes = 'get' | 'post'
import { RequestInit } from 'next/dist/server/web/spec-extension/request'

const defaultHeaders = {
  'Content-Type': 'application/json',
  // 'Content-Type': 'application/x-www-form-urlencoded'
}

const request = <TResponse>(url: string, config: RequestInit = {}): Promise<TResponse> => {
  const defaultConfig = config
  if (!defaultConfig.headers) defaultConfig.headers = defaultHeaders
  if (!defaultConfig.method) defaultConfig.method = 'GET'

  const result = fetch(url, config)
    .then((response) => response.json())
    .then((data) => data as TResponse)
    .catch((err) => {
      console.error(err)
      return err
    })
  return result
}

export default request
