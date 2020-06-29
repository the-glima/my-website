import {GistFilesModel} from './GistResponseModel'

export interface GistDOMModel {
  id: string
  url: string
  files: GistFilesModel[]
  title: string
  language: string
}

export interface GistLogoDOMModel {
  name: string
  url: string
  className: string
}

export interface GistsData {
  collection: GistDOMModel[]
  logos: any[]
  date?: number
}
