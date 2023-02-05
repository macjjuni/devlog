export type PostTypes = {
  title: string
  thumb: string
  link: string
  date: string
}

export type AboutPorps = {
  status: 200 | 404
  posts: PostTypes[]
}
