export interface GetReadMeParams {
  url: string
}

export interface ReadMe {
  content: string
  encoding: string
  download_url: string
  name: string
}

export interface RepoItemSate {
  data: ReadMe
  isLoading: boolean
  readmeContent: string
}