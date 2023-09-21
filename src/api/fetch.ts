// type MethodTypes = 'get' | 'post'
import { RequestInit } from 'next/dist/server/web/spec-extension/request'

const fetchOptions: RequestInit = {
  method: 'GET',
  // cache: 'force-cache',
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'max-age=60',
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
}

const fatchCache = (url: string) => {
  const res = fetch(url, fetchOptions)
    .then((response) => response.json())
    .then((data) => data)
  return res
}

export default fatchCache
