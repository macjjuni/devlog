export interface IList {
  content: string
  id: string
}
export interface IProject {
  title: string
  date: string
  list: IList[]
}

export interface IWork {
  title: string
  position: string
  date: string
  project: IProject[]
}
