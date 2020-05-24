export interface GistDOMModel {
  id: string
  url: string
  files: any[]
  title: string
  language: string
}

export interface GistsData {
  date: number
  collection: GistDOMModel[]
}
