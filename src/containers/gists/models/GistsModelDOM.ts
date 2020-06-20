import {GistFilesModel} from './GistsModelResponse'

export interface GistDOMModel {
  id: string
  url: string
  files: GistFilesModel[]
  title: string
  language: string
}

export interface GistTechLogoDOMModel {
  name: string
  url: string
}

export interface GistsData {
  date: number
  collection: GistDOMModel[]
  logos?: any[]
}
