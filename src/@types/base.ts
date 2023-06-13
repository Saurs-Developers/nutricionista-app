export interface BaseUserInfo {
  password: string
}

export interface PaginatedResponse<T> {
  total_pages: number
  total_items: number
  results: T[]
  current_page: number
}
