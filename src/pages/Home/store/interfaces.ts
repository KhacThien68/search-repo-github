import { PaginationParams } from "../../../app/interfaces"

export interface GetReposParams extends PaginationParams {
  q: string
}

export interface RepoItem {
  avatar_url: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  score: number
  site_admin: boolean
  starred_url: string
  subscriptions_url: string
  type: string
  url: string
}

export interface HomePageState {
  data: RepoItem[]
  page: number
  pageSize: number
  isLoading: boolean
  totalRecords: number
}
