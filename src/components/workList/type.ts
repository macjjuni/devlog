export interface IList {
  content: string
  id: string
}
export interface IProjectList {
  title: string
  date: string
  list: IList[]
}
