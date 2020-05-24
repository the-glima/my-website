export interface GistsResponseModel {
  data: GistModel[]
  status: number
  statusText: string
  headers: any
  config: any
  request?: any
}

export interface GistFilesModel {
  filename: string
  type: string
  language: string
  raw_url: string
  size: number
}

export interface GistModel {
  url: any
  forks_url: string
  commits_url: string
  id: string
  node_id: string
  git_pull_url: string
  git_push_url: string
  html_url: string
  files: GistFilesModel
  created_at: string
  updated_at: string
  description: string
  comments: 0
  user: null
  comments_url: string
  owner: any
  truncated: boolean
}
