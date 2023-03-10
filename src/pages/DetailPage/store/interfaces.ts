export interface GetDetailUserParams {
  url: string
}

export interface RepoItem {
  id: number
  created_at: Date
  description: string
  downloads_url: string
  language: string
  name: string
  stargazers_count: number
  url: string
  watchers_count: number
}

export interface DetailPageSate {
  repoList: RepoItem[]
  isLoading: boolean
}