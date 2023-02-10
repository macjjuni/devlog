import axios, { type InternalAxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'

const isDev = process.env.NODE_ENV === 'development'
const port = process.env.PORT || 3000
const domain = process.env.DOMAIN || 'http://www.macjjuni.com'
const baseURL = isDev ? `http://localhost:${port}` : domain

const api = axios.create({
  baseURL,
  timeout: 180000,
})

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => config,
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError<{ details: string }>) => {
    console.error(error)
    // const { response } = error
    return Promise.reject(error)
  }
)

export default api
