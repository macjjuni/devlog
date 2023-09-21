// type MethodTypes = 'get' | 'post'
import { RequestInit } from 'next/dist/server/web/spec-extension/request'

const fetchOptions: RequestInit = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  next: { revalidate: 5 },
}

const fatchCache = (url: string) => {
  const res = fetch(url, fetchOptions)
    .then((response) => response.json())
    .then((data) => data)
  return res
}

export default fatchCache
